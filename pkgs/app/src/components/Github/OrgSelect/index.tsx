import { IconPlus } from '@tabler/icons-react';
import { App, Button, Select, Skeleton } from 'antd';
import { useEffect, useRef, useState } from 'react';

import { useGetGithubInstallations } from '../../../api/github';
import { GITHUB_APP } from '../../../common/envs';
import { Popup } from '../../../common/popup';
import { AvatarAuto } from '../../AvatarAuto';

import cls from './index.module.scss';

export const GithubOrgSelect: React.FC<{
  defaultSelected?: number | null;
  publicRepos: boolean;
  emptyOption?: boolean;
  onChange: (selected: number | 'public' | null) => void;
  onClose?: () => void;
}> = ({ defaultSelected, emptyOption, publicRepos, onChange, onClose }) => {
  const { message } = App.useApp();
  const ref = useRef<Popup | null>(null);
  const resInstall = useGetGithubInstallations();
  const [selected, setSelected] = useState<number | 'public' | null>(
    defaultSelected || null
  );
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    if (!resInstall.data || resInstall.isFetching) {
      return;
    }

    // If nothing selected yet (first load)
    // Or the currently selected has been removed
    if (!selected || !resInstall.data.find((inst) => inst.id === selected)) {
      setSelected(defaultSelected || (publicRepos ? 'public' : null));
    }

    setReady(true);
  }, [resInstall]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const triggerInstall = () => {
    ref.current = new Popup({
      id: 'github-install',
      url: `https://github.com/apps/${GITHUB_APP}/installations/new`,
      callbacks: {
        onBlocked: () => {
          ref.current = null;
          message.error(
            'The popup to install the GitHub App could not be opened.'
          );
        },
        onClose: () => {
          setReady(false);
          ref.current = null;
          resInstall.refetch();

          if (onClose) {
            onClose();
          }
        },
      },
    });
    ref.current.open();
  };

  if (!ready) {
    return (
      <div className={cls.select}>
        <Skeleton.Input active />
      </div>
    );
  }

  return (
    <Select
      className={cls.select}
      value={selected}
      size="large"
      onChange={setSelected}
      notFoundContent={<></>}
      dropdownRender={(menu) => {
        return (
          <>
            {menu}

            <div className={cls.install}>
              <Button icon={<IconPlus />} type="ghost" onClick={triggerInstall}>
                Add Github Organization
              </Button>
            </div>
          </>
        );
      }}
    >
      {emptyOption && <Select.Option>Select an organization</Select.Option>}
      {publicRepos && (
        <Select.Option value="public">
          <div> </div>
          <div className={cls.label}>Public Repositories</div>
        </Select.Option>
      )}
      {resInstall.data!.map((install) => {
        return (
          <Select.Option key={install.id} value={install.id}>
            <div className={cls.option}>
              <AvatarAuto
                name={install.name}
                src={install.avatarUrl}
                shape="square"
                size="small"
              />
              <div className={cls.label}>{install.name}</div>
            </div>
          </Select.Option>
        );
      })}
    </Select>
  );
};