import React from "react";
import faker from "faker";

const Image = () => {
	return (
		<div className="image-container">
			<a href="#">
				<img className="post-image" src={faker.image.image()} />
				<div className="image-footer">
					<h4>{faker.lorem.sentence()}</h4>
					<p>{faker.lorem.sentence()}</p>
					<p className="link">{faker.internet.url()}</p>
				</div>
			</a>
		</div>
	);
};

export default Image;
