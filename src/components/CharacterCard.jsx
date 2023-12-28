// CharacterCard.jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style.css";
import { Button } from "react-bootstrap";

const CharacterCard = ({ randomData, onCardSelect, handleButtonClick }) => {
  return (
    <div className="container">
      <h2 className="text-center simpsonfont">{randomData?.characterName}</h2>
      <hr />
      <img className="imgCharacters" src={randomData?.imageUrl} alt="Imagen del personaje" />
      <div className="">
        <p className="txFrases">{randomData?.phrase}</p>
      </div>     
    </div>
     <div className="text-center ">
        <Button variant="warning" className="btnAjust" onClick={handleButtonClick}>
          Obtener frase
        </Button>
      </div>
  );
};

export default CharacterCard;
