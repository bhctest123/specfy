import { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

import type { ApiJobList } from '@specfy/models';

import { Row } from '../Deploy/List';
import { refreshProject } from '@/common/query';
import { useProjectStore } from '@/common/store';
import { Flex } from '@/components/Flex';
import { Button } from '@/components/Form/Button';
import { useEventBus } from '@/hooks/useEventBus';

import cls from './index.module.scss';

export const ProjectWelcome: React.FC = () => {
  const { project } = useProjectStore();
  const [job, setJob] = useState<ApiJobList>();
  const navigate = useNavigate();

  useEventBus(
    'job.start',
    (data) => {
      if (data.project.id !== project?.id) {
        return;
      }
      setJob(data.job);
    },
    [project]
  );
  useEventBus(
    'job.finish',
    (data) => {
      if (data.job.id !== job?.id) {
        return;
      }
      setJob(data.job);
    },
    [project, job]
  );

  const onGo = async () => {
    if (job) {
      await refreshProject(job.orgId, job.projectId!, true);
    }
    navigate(`/${project!.orgId}/${project!.slug}`);
  };
  if (!project) {
    return null;
  }

  return (
    <div className={cls.welcome}>
      <div>
        <Flex justify="space-between">
          <h1>Setup in progress</h1>
          <div>
            <Button display="ghost" onClick={onGo}>
              skip
            </Button>
          </div>
        </Flex>
        <div className={cls.intro}>
          <p>Welcome to your new project.</p>
          <p>
            We are fetching your repository from{' '}
            <a href={`https://github.com/${project.githubRepository}`}>
              Github
            </a>
            , please wait a few seconds while everything is being setup.
          </p>
        </div>

        <div className={cls.job}>
          {job ? (
            <Row
              deploy={job}
              params={{ org_id: project.orgId, project_slug: project.slug }}
            />
          ) : (
            <Skeleton />
          )}

          <div className={cls.go}>
            <Button
              display="primary"
              onClick={onGo}
              disabled={!job || job.status !== 'success'}
            >
              Ready
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
