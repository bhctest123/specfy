import { useMemo } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import type { ApiProject } from '@specfy/models';

import type { RouteDocumentation } from '@/types/routes';

import { ProjectDocumentationShow } from './Show';

export const ProjectDocumentation: React.FC<{
  proj: ApiProject;
}> = ({ proj }) => {
  const params = useParams<Partial<RouteDocumentation>>() as RouteDocumentation;

  const hasDoc = useMemo(() => {
    return params['*'] !== '';
  }, [params]);

  if (!hasDoc) {
    return null;
  }

  return (
    <div>
      <Routes>
        <Route path="/*" element={<ProjectDocumentationShow proj={proj} />} />
      </Routes>
    </div>
  );
};
