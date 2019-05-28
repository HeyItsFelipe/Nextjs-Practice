import Layout from '../components/Layout';
import Link from 'next/link';

const Home = () => (
    <Layout>
        <div className="grid-container leader-1">
            <div className="column-24">
                <h1>Welcome to Nextjs Practice</h1>
            </div>
            <div className="column-24">
                <ul>
                    <li><Link href="/tvshowfinder"><a>TV Show Finder</a></Link></li>
                    <li><Link href="/todolist"><a>To Do List</a></Link></li>
                </ul>
            </div>
        </div>
    </Layout>
);

export default Home;