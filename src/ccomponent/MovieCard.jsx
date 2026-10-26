

function MovieCard(props){

    return(
        <div>
          <h2>{props.title}</h2>
          <p> {props.year} | {props.genre}</p>
          <p> ⭐ {props.rating} </p>
        </div>
    )
}

export default MovieCard;