import "./Header.scss";

export default function Header({score, bestScore}) {
	return (
		<header>
			<h1>Lorem Memory</h1>
			<div className="infos">
				<p>
					Get points by clicking on an image but don’t click on any more than
					once !
				</p>

				<div className="scoreboard">
					<span>
						<b>Score:</b> {score}
					</span>
					<span>
						<b>Best Score:</b> {bestScore}
					</span>
				</div>
			</div>
		</header>
	);
}
