const showCard = ({ show }) => (
    <div key={show.id} className="card block trailer-1">
        {show.image ?
            <figure className="card-image-wrap">
                <img className="card-image" src={show.image.medium} alt={show.name} />
            </figure> : ''}
        <div className="card-content">
            <h4><a href={show.url} target="_blank">{show.name}</a></h4>
            <p className="font-size--1 card-last" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
        </div>
    </div>

);

export default showCard;