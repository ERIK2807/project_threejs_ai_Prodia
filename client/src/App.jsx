import CanvasModel from './canvas/CanvasModel.jsx';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import Headers  from './pages/Headers.jsx';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Headers/>
      <Home/>
      <CanvasModel/>
      <Customizer/>
    </main>
  )
}

export default App
