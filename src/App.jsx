import FavoriteSong from "./ccomponent/FavoriteSong";
import Header from "./ccomponent/Header";
import Story from "./ccomponent/Story";
import GameStats from "./ccomponent/GameStats";
import MovieCard from "./ccomponent/MovieCard";
import Ticket from "./ccomponent/Ticket";
import StudentCard from "./ccomponent/StudentCard";

function App() {
  return (
    <div>
    <MovieCard title="Inside Out" year={2024} genre="Animation" rating={7.6/10}/>
    <MovieCard title="Spider-Man: Across the Spider-Verse" year={2023} genre="Animation" rating={8.5/10}/>
    <MovieCard title="Dune: Part Two" year={2024} genre="Sci-Fi" rating={8.5/10}/>
    <Ticket movie="Dune: Part Two" hall = {3} seat="F12" price={45} tickets={2} />
    <StudentCard name="Sarai" age={17} grade="12th grade" />
   </div>
  );

}

export default App;