import { IconHeartFilled, IconThumbDown } from '@tabler/icons-react';
import { Avatar } from 'antd';
import type { BlockVoteItem } from 'api/src/types/api';
import classnames from 'classnames';
import { useState } from 'react';

import { AvatarAuto } from '../../AvatarAuto';
import { map } from '../helpers';

import cls from './index.module.scss';

export const ContentBlockVoteItem: React.FC<{ block: BlockVoteItem }> = ({
  block,
}) => {
  const accepted = block.voteChoice === '1';
  const [open, setOpen] = useState(accepted);

  return (
    <div
      className={classnames(cls.item, accepted ? cls.accepted : cls.rejected)}
    >
      <div
        className={cls.header}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        role="group"
      >
        <div className={cls.label}>
          {accepted && (
            <div className={cls.result}>
              <IconHeartFilled />
              Accepted
            </div>
          )}
          {!accepted && (
            <div className={cls.result}>
              <IconThumbDown />
              Rejected
            </div>
          )}
          Solution
          {block.voteChoice}
        </div>
        <div>
          <Avatar.Group>
            {['Samuel Bodin', 'Raphael Da', 'Nico Tore'].map((name) => {
              return <AvatarAuto key={name} name={name} />;
            })}
          </Avatar.Group>
        </div>
      </div>
      <div className={classnames(cls.content, !open && cls.close)}>
        {map(block)}
      </div>
    </div>
  );
};