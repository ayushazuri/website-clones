import "./index.scss";

import React from "react";

const Card = ({ clone }) => {
	const { name, githubLink, technologies, websiteLink, description, image } =
		clone;
	return (
		<div className="card">
			<img src={image} alt="" />
			<div className="details">
				<h3>{name}</h3>
				<p>{description}</p>
				<div className="technologies">
					<h4>Technologies used:</h4>
					<div className="technology">
						{technologies.map((technology, index) => {
							return (
								<p className="badge" key={index}>
									{technology}
								</p>
							);
						})}
					</div>
				</div>
				<div className="buttons">
					<button href={websiteLink} className="button">
						Website Link
					</button>
					<button href={githubLink} className="button">
						Github Link
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
