export interface BlockListItem {
  type: 'item';
  content: BlockContent[];
}

export interface BlockHeading {
  type: 'heading';
  content: string;
  level: 1 | 2 | 3 | 4;
}

export interface BlockBulletList {
  type: 'bulletList';
  content: BlockListItem[];
}

export interface BlockText {
  type: 'text';
  content: string;
  style?: { bold?: boolean; italic?: boolean; code?: boolean };
  link?: string;
}

export interface BlockContent {
  type: 'content';
  content: BlockText[];
}

export interface BlockQuote {
  type: 'quote';
  content: BlockContent[];
}

export interface BlockPanel {
  type: 'panel';
  panelType: 'error' | 'info' | 'success' | 'warning';
  content: BlockContent[];
}

export type BlockLevelOne =
  | BlockBulletList
  | BlockContent
  | BlockHeading
  | BlockPanel
  | BlockQuote;
export type Blocks =
  | BlockBulletList
  | BlockContent
  | BlockHeading
  | BlockListItem
  | BlockPanel
  | BlockQuote
  | BlockText;
