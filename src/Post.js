import React from "react";
import Image from "./Image";
import faker from "faker";

const Post = props => {
	return (
		<div className="container">
			<a href="#">
				<img className="avatar" src={props.avatar} />
			</a>
			<div className="post">
				<div className="post-header">
					<a className="author">{props.name}</a>
					<p className="profile-name">{`@${props.name}`}</p>
					<p className="date">{faker.date.weekday()}</p>
					<i className="fas fa-angle-down" />
				</div>
				<p>{faker.lorem.paragraph()}</p>
				<Image />
			</div>
		</div>
	);
};

export default Post;
