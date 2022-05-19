import { BrowserRouter } from 'react-router-dom'

import { VManagerProvider } from './context/VManagerContext'
import AppRoutes from './routes'
import GlobalStyles from './styles/global'
import SideBar from './components/SideBar'

function App() {
  return (
    <VManagerProvider>
      <BrowserRouter>
        <GlobalStyles />
        <SideBar />
        <AppRoutes />
      </BrowserRouter>
    </VManagerProvider>
  )
}

export default App
