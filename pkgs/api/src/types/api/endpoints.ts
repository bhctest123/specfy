/* eslint-disable @typescript-eslint/member-ordering */
import type { ReqListActivities, ResListActivities } from './activities';
import type { ResListRevisionBlobs } from './blob';
import type { ReqListComponents, ResListComponents } from './components';
import type { ReqListDocuments, ResListDocuments } from './documents';
import type { ResGetMe } from './me';
import type { ReqPostOrg, ResListOrgs, ResPostOrg } from './orgs';
import type {
  ReqDeletePerms,
  ReqListPerms,
  ReqPostPerms,
  ResDeletePerms,
  ResListPerms,
  ResPostPerms,
} from './perms';
import type { ReqListPolicies, ResListPolicies } from './policies';
import type {
  ReqListProjects,
  ReqPostProject,
  ReqProjectParams,
  ReqUpdateProject,
  ResDeleteProject,
  ResGetProject,
  ResListProjects,
  ResPostProject,
  ResUpdateProject,
} from './projects';
import type {
  ReqGetRevision,
  ReqListRevisions,
  ReqPostCommentRevision,
  ReqPostRevision,
  ReqPutRevision,
  ResCheckRevision,
  ResDeleteRevision,
  ResGetRevision,
  ResListRevisions,
  ResMergeRevision,
  ResPostCommentRevision,
  ResPostRevision,
  ResPutRevision,
  ResRebaseRevision,
} from './revisions';
import type { ReqListUsers, ResListUsers } from './users';

export interface API {
  '/0/': { GET: { res: { root: true }; qp: never; body: never } };

  '/0/activities': {
    GET: { res: ResListActivities; qp: ReqListActivities; body: never };
  };

  '/0/components': {
    GET: { res: ResListComponents; qp: ReqListComponents; body: never };
  };

  '/0/documents': {
    GET: { res: ResListDocuments; qp: ReqListDocuments; body: never };
  };
  [key: `/0/documents/${string}`]: {
    GET: { res: ResListDocuments; qp: ReqListDocuments; body: never };
  };

  '/0/me': { GET: { res: ResGetMe; qp: never; body: never } };

  '/0/orgs': {
    GET: { res: ResListOrgs; qp: never; body: never };
    POST: { res: ResPostOrg; qp: never; body: ReqPostOrg };
  };

  '/0/perms': {
    GET: { res: ResListPerms; qp: ReqListPerms; body: never };
    POST: { res: ResPostPerms; qp: never; body: ReqPostPerms };
    DELETE: { res: ResDeletePerms; qp: never; body: ReqDeletePerms };
  };

  '/0/policies': {
    GET: { res: ResListPolicies; qp: ReqListPolicies; body: never };
  };

  '/0/projects': {
    GET: { res: ResListProjects; qp: ReqListProjects; body: never };
    POST: { res: ResPostProject; qp: never; body: ReqPostProject };
  };
  [key: `/0/projects/${string}`]: {
    GET: { res: ResGetProject; qp: ReqProjectParams; body: never };
    PUT: {
      res: ResUpdateProject;
      qp: ReqProjectParams;
      body: ReqUpdateProject;
    };
    DELETE: { res: ResDeleteProject; qp: ReqProjectParams; body: never };
  };

  '/0/revisions': {
    GET: { res: ResListRevisions; qp: ReqListRevisions; body: never };
    POST: { res: ResPostRevision; qp: never; body: ReqPostRevision };
  };
  [key: `/0/revisions/${string}`]: {
    GET: { res: ResGetRevision; qp: ReqGetRevision; body: never };
    PUT: { res: ResPutRevision; qp: ReqGetRevision; body: ReqPutRevision };
    DELETE: { res: ResDeleteRevision; qp: ReqProjectParams; body: never };
  };

  // @ts-expect-error
  [key: `/0/revisions/${string}/blobs`]: {
    POST: { res: ResListRevisionBlobs; qp: ReqGetRevision; body: never };
  };
  // @ts-expect-error
  [key: `/0/revisions/${string}/checks`]: {
    GET: { res: ResCheckRevision; qp: ReqGetRevision; body: never };
  };
  // @ts-expect-error
  [key: `/0/revisions/${string}/comment`]: {
    POST: {
      res: ResPostCommentRevision;
      qp: ReqGetRevision;
      body: ReqPostCommentRevision;
    };
  };
  // @ts-expect-error
  [key: `/0/revisions/${string}/merge`]: {
    POST: { res: ResMergeRevision; qp: ReqGetRevision; body: never };
  };
  // @ts-expect-error
  [key: `/0/revisions/${string}/rebase`]: {
    POST: { res: ResRebaseRevision; qp: ReqGetRevision; body: never };
  };

  '/0/users': { GET: { res: ResListUsers; qp: ReqListUsers; body: never } };
}

export type APIPaths = keyof API;