import BaristaForm  from './components/BaristaForm';
import './App.css'
import './index.css'
import coffeeBagImg from './assets/coffeeBag.png'

function App() {

  return (
    <>
        <div className='titleContainer'>
        <img src={coffeeBagImg} width={90} alt="coffeeBag.png" /> <h1 className="title">On My Grind</h1>
        </div>

      <p className='hookText'>So you think you can barista? Let's put that to the test...</p>

      <BaristaForm />
    </>
  )
}

export default App