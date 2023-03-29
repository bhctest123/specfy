import { z } from 'zod';

import { notFound, validationError, forbidden } from '../common/errors';
import { valOrgId } from '../common/zod';
import type { Perm } from '../models';
import { Project } from '../models/project';
import type { ReqProjectParams } from '../types/api';
import type { PreHandler } from '../types/fastify';

declare module 'fastify' {
  interface FastifyRequest {
    project?: Project;
  }
}

export function valQueryProject<
  TQuery extends { org_id: string; project_slug: string }
>(perms: Perm[], query: TQuery) {
  return z
    .object({
      org_id: valOrgId(perms),
      project_slug: z.string().min(2).max(36),
    })
    .strict()
    .safeParse(query);
}

export const getProject: PreHandler<{
  Params: ReqProjectParams;
}> = async (req, res) => {
  const val = valQueryProject(req.perms!, req.params);
  if (!val.success) {
    validationError(res, val.error);
    return;
  }

  const proj = await Project.findOne({
    where: {
      orgId: req.params.org_id,
      slug: req.params.project_slug,
    },
  });

  if (!proj) {
    return notFound(res);
  }

  if (!req.perms!.find((perm) => perm.projectId === proj.id)) {
    return forbidden(res);
  }

  req.project = proj;
};
