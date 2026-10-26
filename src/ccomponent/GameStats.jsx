function GameStats(){

const game  = {
wins: 5,
name: "Call of duty",
losses: 2

};

const getRank = () => {
const winRate = Math.Round((game.wins/(game.wins+game.losses)) * 100);

if( winRate >= 70)
     {return "Pro";}
else if (winRate >= 40)
     {return "Rising Star";}
else
     { return "Rookike"; }

}

    return(
        <div>
           <h1> {game.name} </h1>
           <p> Games played: {game.wins + game.lose} </p>
           <p> Win rate: {Math.Round((game.wins/(game.wins+game.losses)) * 100)} </p>
           <p> Rank: {getRank()} </p>
        </div>
    )
}

export default GameStats;