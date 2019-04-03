import React from "react";
import TextBox from "./TextBox";
import Post from "./Post";
const Feed = props => {
	return (
		<div className="feed">
			<TextBox />
			<Post name={props.children} avatar={props.children} />
		</div>
	);
};

export default Feed;
