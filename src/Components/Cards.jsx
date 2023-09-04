import "./Cards.scss";
import stars from "../assets/stars.png";

function Card() {
    return (
        <div className="card">

            <div className="inner">
                <div className="front">

                </div>
                <div className="back">
                <img src={stars} alt="a cute star" />
                </div>
            </div>

        </div>)
}

export default function Cards() {
    return (
        <div className="cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}