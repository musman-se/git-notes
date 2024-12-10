// External Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Internal Dependencies
import Navbar from "./components/Navbar"
import PublicGist from "./components/PublicGist/PublicGist"
import Profile from "./components/Profile/Profile"
import MainLayout from './components/layout/MainLayout'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<PublicGist />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <Navbar /> */}
{/* <div className="mx-32 my-8"> */}