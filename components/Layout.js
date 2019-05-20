import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Nextjs Practice</title>
            <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css" />
        </Head>
        {props.children}
    </div>
);

export default Layout;