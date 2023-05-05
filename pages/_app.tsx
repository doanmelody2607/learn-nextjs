import DefaultLayout from '@/layouts/DefaultLayout';
import '@/styles/globals.scss';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { FC, ReactElement } from 'react';

export interface ChildrenProps {
    children: ReactElement;
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    Layout: FC<ChildrenProps>;
};

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const Layout = Component.Layout || DefaultLayout;

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
