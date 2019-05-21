import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Tvshows = (props) => (
    <Layout>
        <div className="grid-container leader-1">
            <div className="column-24">
                <h1>TV Shows</h1>
            </div>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>{show.name}</li>
                )
                )}
            </ul>
        </div>
    </Layout>
);

Tvshows.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=rick%20and%20morty')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)
    console.log(data);

    return {
        shows: data.map(entry => entry.show)
    }
}

export default Tvshows;