import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

class Tvshows extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shows: [],
            inputValue: ''
        };
    }

    getTvShows = async () => {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=' + this.state.inputValue)
        const data = await res.json()

        this.setState({
            shows: data.map(entry => entry.show)
        });
    }

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    }

    handleInputKeyPress = (event) => {
        if (event.keyCode === 13) {
            this.getTvShows();
        }
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
                    <div className="column-8 center-column">
                        <div className="input-group">
                            <input className="input-group-input" type="text" placeholder="Enter TV Show" onChange={this.handleInputChange} onKeyDown={this.handleInputKeyPress} />
                            <span className="input-group-button">
                                <button className="btn" onClick={this.getTvShows}>Submit</button>
                            </span>
                        </div>
                    </div>
                    <div className="column-24">
                        <ul>
                            {shows}
                        </ul>
                    </div>
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