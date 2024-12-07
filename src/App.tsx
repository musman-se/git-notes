// Internal Dependencies
import Navbar from "./components/Navbar"
import PublicGist from "./components/PublicGist/PublicGist"

const App = () => {

  return (
    <div>
      <Navbar />
        <div className="mx-32 my-8">
          <PublicGist />
        </div>
    </div>
  )
}

export default App
