import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

class Tvshows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: []
        };
    }

    handleClick = async (event) => {
        console.log('Clicked');
        const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
        const data = await res.json()

        this.setState({
            shows: data.map(entry => entry.show)
        });
    }

    render() {
        let shows = [];
        if (this.state.shows.length > 0) {
            shows = this.state.shows.map(show => (
                <li key={show.id}>{show.name}</li>
            ));
        }
        return (
            <Layout>
                <div className="grid-container leader-1">
                    <div className="column-24">
                        <h1>TV Shows</h1>
                    </div>
                    <button onClick={this.handleClick}>Fetch</button>
                    <ul>
                        {shows}
                    </ul>
                </div>
            </Layout>
        );
    }
}

// --- This code may be useful if we want an initial fetch from the api ---
// Tvshows.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=rick%20and%20morty')
//     const data = await res.json()

//     console.log(`Show data fetched. Count: ${data.length}`)
//     console.log(data);

//     return {
//         shows: data.map(entry => entry.show)
//     }
// }

export default Tvshows;