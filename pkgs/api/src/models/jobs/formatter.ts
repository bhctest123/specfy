import { toApiUser } from '../../common/formatters/user.js';
import type { ApiJob } from '../../types/api/index.js';

import type { JobWithUser } from './type.js';

export function toApiJob(job: JobWithUser): ApiJob {
  return {
    id: job.id,
    type: job.type,
    typeId: job.typeId,
    status: job.status,
    config: job.config,
    reason: job.reason,
    createdAt: job.createdAt.toISOString(),
    updatedAt: job.updatedAt.toISOString(),
    startedAt: job.startedAt?.toISOString() || null,
    finishedAt: job.finishedAt?.toISOString() || null,
    user: toApiUser(job.User!),
  };
}