// External Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Internal Dependencies
import MainLayout from './components/layout/MainLayout'

import PublicGist from "./components/PublicGist/PublicGist"
import Profile from "./components/Profile/Profile"
import CreateGist from './pages/CreateGist'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<PublicGist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create' element={<CreateGist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <Navbar /> */}
{/* <div className="mx-32 my-8"> */}