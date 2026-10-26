
function FavoriteSong(){

const song = {
title: "Blinding Lights",
artist: "The Weeknd",
duration: 200,
plays: 4800000000
};

    return(
        <div>
           <p> 🎶 {song.title} 🎶 </p>
           <p> {song.artist} </p>
           <p> ⏰ {Math.floor(song.duration / 60)} : {song.duration % 60} ⏰ </p>
           <p> {song.plays / 1000000} </p>
        </div>
    )
}

export default FavoriteSong;
