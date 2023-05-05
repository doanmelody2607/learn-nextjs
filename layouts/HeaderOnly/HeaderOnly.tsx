import Header from '@/layouts/components/Header';
import classNames from 'classnames/bind';
import type { ReactElement } from 'react';
import { FC } from 'react';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

export interface ChildrenProps {
    children: ReactElement;
}

const HeaderOnly: FC<ChildrenProps> = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnly;
