import Showcard from './Showcard';

const createShowCards = (shows) => {
    let showCards = [];
    if (shows.length > 0) {
        showCards = shows.map(show => (
            <Showcard key={show.id} show={show} />
        ));
    }
    return showCards;
};

const Showgallery = ({ shows }) => (
    <div className="column-24 leader-1">
        <div className="column-18 pre-3">
            <div className="block-group block-group-3-up">
                {createShowCards(shows)}
            </div>
        </div>
    </div>
);


export default Showgallery;