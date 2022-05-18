import { BrowserRouter } from 'react-router-dom'
import SideBar from './components/SideBar'

import AppRoutes from './routes'
import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <SideBar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
