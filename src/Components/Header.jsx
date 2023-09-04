import "./Header.scss";

function Scoreboard() {
    return (
    <div className="scoreboard">
        <span><b>Score:</b>2</span> 
        <span><b>Best Score:</b>6</span>   
    </div>
    )
}

export default function Header() {
    return (
        <header>
        
            <h1>Lorem Memory</h1>
            <div className="infos">
                <p>Get points by clicking on an image but don’t click on any more than once !<br></br>If you get up to 12, you win !</p>
                <Scoreboard />
            </div>
        
        </header>
    )
}