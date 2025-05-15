function MovieCard({movieCardProp}) {
    function onFavoriteClick() {
        alert("clicked")
    }

    return <div className="movie-card">
        <div className="movie-poster">
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movieCardProp.title}</h3>
            <p>{movieCardProp.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard