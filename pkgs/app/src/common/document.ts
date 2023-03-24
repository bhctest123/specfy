import type { ApiDocument } from 'api/src/types/api';

export const TYPE_TO_TEXT: Record<ApiDocument['type'], string> = {
  rfc: 'RFC',
  pb: 'PB',
};

export const TYPE_TO_READABLE: Record<ApiDocument['type'], string> = {
  rfc: 'RFC',
  pb: 'Playbook',
};
