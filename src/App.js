import React from "react";
import faker from "faker";
import Image from "./Image";
import Post from "./Post";
import Header from "./Header";
import ProfileInfo from "./ProfileInfo";

const App = () => {
	const name = faker.name.firstName();
	const avatar = faker.image.avatar();
	return (
		<div>
			<Header />
			<main className="main">
				<ProfileInfo name={name} avatar={avatar} />
				<Post name={name} avatar={avatar} />
			</main>
		</div>
	);
};

export default App;
