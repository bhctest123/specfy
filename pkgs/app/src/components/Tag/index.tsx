import { IconX } from '@tabler/icons-react';
import classNames from 'classnames';

import cls from './index.module.scss';

export const Tag: React.FC<{
  children: React.ReactNode;
  className?: string;
  closable?: boolean;
  variant?: 'border' | 'default' | 'light';
  onClose?: () => void;
}> = ({ children, className, closable, variant = 'default', onClose }) => {
  return (
    <div
      className={classNames(
        cls.tag,
        className,
        closable && cls.closable,
        cls[variant]
      )}
    >
      {children}
      {closable && (
        <button onClick={onClose}>
          <IconX />
        </button>
      )}
    </div>
  );
};
