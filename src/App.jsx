import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css';
import CharacterCard from './components/CharacterCard';
import ImageData from './components/ImgArray';
import { useState, useEffect } from 'react'; // Importa useEffect

function App() {
  const imageData = ImageData();
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * imageData.length);
    setRandomData(imageData[randomIndex]);
  }, []);

  const handleCardSelect = (selectedData) => {
    setRandomData(selectedData);
    console.log(selectedData);
  };

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * imageData.length);
    const selectedData = imageData[randomIndex];
    setRandomData(selectedData);
  };

  return (
    <div className='mb-5'>
      <img src="./src/images/logosimpson.png" alt="" className='img-fluid my-5 mx-auto d-block imagenLogo' />
      <div className="container">
        <CharacterCard
          randomData={randomData}
          onCardSelect={handleCardSelect}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default App;
