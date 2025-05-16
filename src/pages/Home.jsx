import MovieCard from "../components/MovieCard"
import { useState } from "react"


function Home() {
    const [searchQuery, setSearchQuery] = useState("")  // convention [name of the state, function to update] = useState("Default value you want for state")

    const movies = [
        { id: 1, title: "John Wick", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "1998" },
    ];

    const handleSearch = (e) => {
        e.preventDefault() // submit button by default gets cleared, this will keep the text in the search box
        alert(searchQuery)  // for fun to see value of searcQuery displayed as popup
        setSearchQuery("GOOD BYE")  // this is for fun - overwrites the value of the search text on submit
    };


    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies"
                    className="search-input"
                    value={searchQuery} // connect the value of the input to the search query state
                    onChange={(e) => setSearchQuery(e.target.value)}  // required to refresh the page after each letter is typed and sets the new input value to searchQuery
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((currentMovieInTheArray) => (
                    currentMovieInTheArray.title.toLowerCase().startsWith(searchQuery) && ( // USING searchQuery check the value of searchQuery against the movie titles set to lower case
                        <MovieCard movieCardProp={currentMovieInTheArray} key={currentMovieInTheArray.id} />
                    )
                ))}
            </div>
        </div>
    );
}


export default Home