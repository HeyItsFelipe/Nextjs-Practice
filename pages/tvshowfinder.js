import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import Showgallery from '../components/Showgallery';
import { useState } from 'react';

function Tvshows() {

    const [shows, setShows] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const getTvShows = async () => {
        const res = await fetch('https://api.tvmaze.com/search/shows?q=' + inputValue)
        const data = await res.json()
        console.log(data);
        setShows(data.map(entry => entry.show));
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    // Tv show data is fetched from api when enter key is pressed.
    const handleInputKeyPress = (event) => {
        if (event.keyCode === 13) {
            getTvShows();
        }
    }

    return (
        <Layout>
            <div className="grid-container leader-1">
                <div className="column-24">
                    <h1>TV Show Finder</h1>
                </div>
                <div className="column-8 center-column">
                    <div className="input-group">
                        <input className="input-group-input" type="text" placeholder="Enter TV Show"
                            onChange={handleInputChange} onKeyDown={handleInputKeyPress} />
                        <span className="input-group-button">
                            <button className="btn" onClick={getTvShows}>Submit</button>
                        </span>
                    </div>
                </div>
                <Showgallery shows={shows} />
            </div>
        </Layout>
    );

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