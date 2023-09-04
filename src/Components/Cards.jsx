import "./Cards.scss";
import stars from "../assets/stars.png";
import { useEffect, useState } from "react";

function Card({ creature, handleClick }) {
	return (
        <div className="card"
            onClick={handleClick}
        >
            <div className="inner">
				<div className="front">
					<img src={creature.image_url} alt={creature.name} />
				</div>

				<div className="back">
					<img src={stars} alt="a cute star" />
				</div>
			</div>
		</div>
	);
}

export default function Cards({ creatures, winGame }) {

    function shuffle() {
        function shuffleArr(array) {
            let m = array.length;
            let t;
            let i;
    
            // While there remain elements to shuffle…
            while (m) {
                // Pick a remaining element…
                i = Math.floor(Math.random() * m--);
    
                // And swap it with the current element.
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
    
            return array;
        }

        let oldArr = [...cardsList];
        let newArr = shuffleArr(oldArr);
        setCards(newArr);
    }

    useEffect(() => {
        setCards(cardsList);
    }, [creatures]);

    const cardsList = creatures.map((x) => (
        <Card creature={
            creatures[creatures.indexOf(x)]}
            key={x.number}
            handleClick={handleClick}
        />
	));

	const [cards, setCards] = useState(cardsList);

    function handleClick(e) {
        shuffle();
    }

	return (
		<div>
			<div className="cards">{cards}</div>
		</div>
	);
}

/* 
Le joueur clique sur une carte
SI elle a déjà la data "click"
    SI son score est plus élevé que son bestScore
        bestScore = Score
    son score retombe à 0
SINON 
    il gagne un point
    le jeu se mélange
*/