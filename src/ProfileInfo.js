import React from "react";

const ProfileInfo = props => {
	return (
		<aside className="profile-info">
			<a href="#">
				<img src={props.avatar} />
			</a>
			<h3>{props.name}</h3>
			<p>{`@${props.name}`}</p>
			<p>
				<i class="fas fa-map-marker-alt" />
				{props.country}
			</p>
		</aside>
	);
};

export default ProfileInfo;
