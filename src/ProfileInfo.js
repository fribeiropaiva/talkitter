import React from "react";

const ProfileInfo = props => {
	return (
		<aside className="profile-info">
			<div className="profile-cover">
				<img src={props.cover} />
			</div>
			<img className="profile-avatar" src={props.avatar} />
			<div className="user-info">
				<h3>{props.name}</h3>
				<p>{`@${props.name}`}</p>
				<p>
					<i class="fas fa-map-marker-alt" />
					{props.country}
				</p>
			</div>
		</aside>
	);
};

export default ProfileInfo;
