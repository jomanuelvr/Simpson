import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ImageData from "./ImgArray";

const CharacterCard = ({ onCardSelect }) => {
  const imageData = ImageData();
  const [randomData, setRandomData] = useState(null);

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * imageData.length);
    const selectedData = imageData[randomIndex];
    setRandomData(selectedData);
    onCardSelect(selectedData); // Llamada a la función de App con el componente seleccionado
  };

  return (
    <div className="container">
      <h2 className="text-center">{randomData?.characterName}</h2>
      <hr />
      <img className="imgCharacters" src={randomData?.imageUrl} alt="Imagen del personaje" />
      <div className="">
        <p className="txFrases">{randomData?.phrase}</p>
      </div>
      <div className="text-center ">
        <Button variant="warning" className="btnAjust" onClick={handleButtonClick}>
          Obtener frase
        </Button>
      </div>
    </div>
  );
};

export default CharacterCard;
