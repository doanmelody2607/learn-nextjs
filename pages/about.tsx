import { useRouter } from 'next/router';
import HeaderOnly from '@/layouts/HeaderOnly';
import type { NextPageWithLayout } from './_app';

const AboutPage: NextPageWithLayout = () => {
    return <h2>About Page</h2>;
};

AboutPage.Layout = HeaderOnly;

export default AboutPage;

// export async function getServerSideProps() {
//     return {
//         props: {}, // will be passed to the page component as props
//     };
// }
