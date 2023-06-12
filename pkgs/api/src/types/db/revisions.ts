import type { Prisma } from '@prisma/client';

import type { BlockLevelZero } from '../api';

export interface DBRevision {
  id: string;

  orgId: string;
  projectId: string;

  name: string;
  description: BlockLevelZero;
  blobs: string[];
  locked: boolean;
  status: 'approved' | 'closed' | 'draft' | 'waiting';
  merged: boolean;

  createdAt: string;
  updatedAt: string;
  mergedAt: string | null;
  closedAt: string | null;
}

export type RevisionWithProject = Prisma.RevisionsGetPayload<{
  include: { Project: true };
}>;
