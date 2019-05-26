import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>Nextjs Practice</title>
            <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon-16x16.png" />
            <link rel="stylesheet" href="https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css" />
        </Head>
        {props.children}
    </div>
);

export default Layout;