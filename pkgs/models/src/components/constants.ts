import type { ComponentType } from './types.js';

export const componentTypes: ComponentType[] = [
  'app',
  'ci',
  'db',
  'hosting',
  'language',
  'messaging',
  'network',
  'saas',
  'storage',
  'tool',
  'project',
  'service',
];

export const supportedTypeToText: Record<ComponentType, string> = {
  analytics: 'analytics',
  api: 'api',
  app: 'application',
  ci: 'ci',
  db: 'database',
  etl: 'etl',
  hosting: 'hosting',
  language: 'language',
  messaging: 'queue',
  monitoring: 'monitoring',
  network: 'network',
  project: 'project',
  saas: 'third-party',
  service: 'service',
  storage: 'storage',
  tool: 'tool',
};

export const internalTypeToText: Record<ComponentType, string> = {
  analytics: 'Analytics',
  api: 'API',
  app: 'Application',
  ci: 'CI',
  db: 'Database',
  etl: 'ETL',
  hosting: 'Hosting',
  language: 'Language',
  messaging: 'Messaging',
  monitoring: 'Monitoring',
  network: 'Network',
  project: 'Project',
  saas: 'Saas',
  service: 'Service',
  storage: 'Storage',
  tool: 'Tool',
};
