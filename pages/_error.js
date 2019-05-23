import Layout from '../components/Layout';
import Link from 'next/link';

const getBouncer = () => {
    let bouncers = [
        "https://avatars1.githubusercontent.com/u/3924990?s=460&v=4",
        "https://avatars2.githubusercontent.com/u/47069326?s=460&v=4",
        "https://avatars1.githubusercontent.com/u/36907562?s=460&v=4",
        "https://avatars3.githubusercontent.com/u/37091030?s=460&v=4"
    ]
    let randomIndex = Math.floor(Math.random() * bouncers.length);
    return bouncers[randomIndex];
}

const Error = () => (
    <Layout>
        <div className="grid-container leader-1">
            <div className="column-8 center-column text-center">
                <h1>Error 404</h1>
            </div>
            <div className="column-10 pre-2 leader-2">
                <img src={getBouncer()} alt="bouncer image" />
            </div>
            <div className="column-10 post-2 leader-2">
                <h1>
                    The page you are looking for isn't here!
                </h1>
                <h1>
                    Our bouncer will escort you out.
                </h1>
                <h1>
                    <Link href="/"><a>Click Here</a></Link>
                </h1>
            </div>
        </div>
    </Layout>
);

export default Error;