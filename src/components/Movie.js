import { Poster_path,imageReplace } from "../Api";



const Movie = ({title,overview,poster_path,vote_average})=>{
    const voteClass=(vote)=>{
        if (vote >= 8)
            return 'green'
        else if(vote >=6)
            return 'orange'
        else
            return 'red'        
    }
    return(
        <>
        <div className="movie">
        <img src={poster_path ? Poster_path + poster_path: imageReplace}alt={title}/>
        <div className="moive-info">
            <h4>{title}</h4>
            <span className={"movie_vote" +voteClass(vote_average) }>{vote_average}</span>
        </div>
        <div className="movie-overview">
            <h3>{title}</h3>
            <p>{overview}</p>
        </div>
        </div>
        </>
    )
}
export default Movie;