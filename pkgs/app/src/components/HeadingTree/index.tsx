import { Anchor } from 'antd';
import type { AnchorLinkItemProps } from 'antd/es/anchor/Anchor';
import { useState } from 'react';
import { useMount } from 'react-use';

import { getHeadingID } from '../../common/headings';
import type { BlockLevelOne } from '../../types/content';

import cls from './index.module.scss';

export const HeadingTree: React.FC<{ blocks: BlockLevelOne[] }> = ({
  blocks,
}) => {
  const [headings, setHeadings] = useState<AnchorLinkItemProps[]>([]);
  useMount(() => {
    const tmp = [];
    for (let index = 0; index < blocks.length; index++) {
      const blk = blocks[index];
      if (blk.type !== 'heading' || blk.level > 1) continue;
      tmp.push({
        key: index,
        href: `#h-${getHeadingID(blk.content)}`,
        title: blk.content,
      });
    }
    setHeadings(tmp);
  });

  return (
    <div className={cls.tree}>
      <Anchor items={headings} targetOffset={20} />
    </div>
  );
};
