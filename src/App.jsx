import './app.css'
import Gallery from './components/Gallery/Gallery'
import TopBar from './components/TopBar/topBar'
import LeftBar from './components/LeftBar/LeftBar'
const App = () => {
  return (
    <div className='app'>
    <LeftBar />
    <div className="content">
      <TopBar />
      <Gallery />
    </div>
    </div>
  )
}

export default App