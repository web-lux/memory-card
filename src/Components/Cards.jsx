import "./Cards.scss";
import stars from "../assets/stars.png";
import { useState } from "react";

function Card({ creature, handleClick, cardOrder }) {

    return (
        <div className="card"
            onClick={handleClick}
            style={{ order: cardOrder }}
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

export default function Cards({ creatures, playGame }) {
    const [cardOrder, setCardOrder] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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

        const initial = [...cardOrder];
        const recent = shuffleArr(initial);
        setCardOrder(recent);

    }

    const cards = creatures.map((x) => (
        <Card creature={
            creatures[creatures.indexOf(x)]}
            key={x.number}
            handleClick={handleClick}
            cardOrder={cardOrder[creatures.indexOf(x)]}
        />));

    function handleClick(e) {
        shuffle();
    }

	return (
		<div>
            <div className="cards">{cards}</div>
		</div>
	);
}