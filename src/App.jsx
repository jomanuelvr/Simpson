import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import CharacterCard from './components/CharacterCard';

function App() {
  return (
    <div>
      <img src="src/images/logosimpson.png" alt="" className='img-fluid my-5 mx-auto d-block imagenLogo' />
      <div className="container">
        <CharacterCard />
      </div>
    </div>
  );
}

export default App;
