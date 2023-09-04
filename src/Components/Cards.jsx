import "./Cards.scss";
import stars from "../assets/stars.png";

function Card({creature}) {

    return (
        <div
            className="card"
        >

            <div className="inner">
                <div className="front">
                    <img src={creature.image_url} alt={creature.name} />
                </div>

                <div className="back">
                <img src={stars} alt="a cute star" />
                </div>
            </div>

        </div>)
} 

export default function Cards({ creatures }) {

    const cards = creatures.map(x => (
        <Card
            creature={creatures[creatures.indexOf(x)]}
            key={x.number}
        />
    ))

    return (
    <div>
            <div className="cards">
                {cards}
        </div>
    </div>
    )
}