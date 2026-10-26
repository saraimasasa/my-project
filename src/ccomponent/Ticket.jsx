
function Ticket(movie, hall, seat, price,count){

    return(
        <div>
          <h3>🎟️ {movie}</h3>
          <p> Hall: {hall} | seat: {seat}</p>
          <p> Price: {price} NIS | with popcorn: {price+15} NIS  </p>
          <p> Tickets: {count} </p>
          <p> Total: {count*price} NIS </p>
        </div>
    )
}

export default Ticket;