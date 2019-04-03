import React from "react";
import faker from "faker";
import Post from "./Post";
import TextBox from "./TextBox";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";

import Feed from "./Feed";

const App = () => {
	const name = faker.name.firstName();
	const avatar = faker.image.avatar();
	const country = faker.address.country();
	const cover = faker.image.image();
	return (
		<div>
			<Header />
			<main className="main">
				<ProfileInfo
					name={name}
					avatar={avatar}
					country={country}
					cover={cover}
				/>
				<div className="feed">
					<TextBox />
					<Post name={name} avatar={avatar} />
					<Post name={name} avatar={avatar} />
					<Post name={name} avatar={avatar} />
					<Post name={name} avatar={avatar} />
					<Post name={name} avatar={avatar} />
				</div>
			</main>
		</div>
	);
};

export default App;
