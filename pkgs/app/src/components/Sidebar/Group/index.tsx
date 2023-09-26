import classNames from 'classnames';

import { useGlobal } from '@/common/store/global';

import cls from './index.module.scss';

export const Group: React.FC<{
  children: React.ReactNode;
  name?: string;
  switcher?: React.ReactNode;
}> = ({ children, name, switcher }) => {
  const { sidebarCollapsed } = useGlobal();

  return (
    <div className={classNames(cls.group, sidebarCollapsed && cls.collapsed)}>
      <div className={cls.head} role="button" tabIndex={0}>
        {name && <div className={cls.name}>{name}</div>}
        {switcher}
      </div>
      <div className={cls.sub}>{children}</div>
    </div>
  );
};
