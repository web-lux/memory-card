import "./Cards.scss";
import stars from "../assets/stars.png";
import { useState, useEffect } from "react";

function Card({ creature, handleClick, cardOrder, id, innerClass, cardClass }) {

    return (
        <div className={cardClass}
            onClick={handleClick}
            style={{ order: cardOrder }}
            id={id}
        >
            <div className={innerClass}>
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
    const [innerClass, setInnerClass] = useState("inner");
    const [cardClass, setCardClass] = useState("card active");

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

    const [selected, setSelected] = useState([]);

    const cards = creatures.map((x) => (
        <Card creature={
            creatures[creatures.indexOf(x)]}
            key={x.number}
            handleClick={handleClick}
            cardOrder={cardOrder[creatures.indexOf(x)]}
            id={x.number}
            innerClass={innerClass}
            cardClass={cardClass}
        />));

    function handleClick(e) {
        if (selected.includes(e.currentTarget.id)) {
            playGame("loss");
            setSelected([])
        } else {
            playGame();
            setSelected([...selected, e.currentTarget.id])
        }
        setCardClass("card inactive")
        setInnerClass("inner shuffle")
        setTimeout(() => {
            shuffle();
            setInnerClass("inner unshuffle")
        }, 1000)
        setTimeout(() => {
            setCardClass("card active")
        }, 1500)
    }

	return (
		<div>
            <div className="cards">{cards}</div>
		</div>
	);
}