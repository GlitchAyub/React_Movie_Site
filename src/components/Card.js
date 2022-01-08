import { Poster_path,imageReplace } from "../Api";



const Card = ({title,overview,poster_path,vote_average,release_date,popularity,original_language})=>{

    return(
        <>
        <div className="card">
        <img src={poster_path ? Poster_path + poster_path: imageReplace}alt={title}/>
        <div className="card_holder">
        <div className="card-info">
            <h4>{title}  <span className={"card_vote" }>{vote_average}</span> </h4>
            <p><span className="color">Release Date :</span> {release_date}</p>
            <p><span className="color">Popularity : </span>{popularity}</p>
            <p><span className="color">Language :</span> {original_language}</p>
           
        </div>
        <div className="card-overview">
            
            <p><span className="color">Description :</span> {overview}</p>
        </div>
        </div>

        </div>
        </>
    )
}
export default Card;