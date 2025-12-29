import CharacterDetail from "./components/CharacterDetail"
import CharacterList from "./components/CharacterList"
import Navbar from "./components/Navbar"
import characters from "./data/data"

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between mx-20">
         <CharacterList characters={characters} />
      <CharacterDetail/>
      </div>
     
    </div>
  )
}
export default App
