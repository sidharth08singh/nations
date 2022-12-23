function NationCard({countryName, capital, image, description}) {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="country flag" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{countryName}</p>
                    <p className="subtitle is-6">{capital}</p>
                    <p className="content">{description}</p>
                </div>
            </div>
            
            
        </div>
    )
}

export default NationCard;