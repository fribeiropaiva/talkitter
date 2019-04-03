import React from "react";

const Header = () => {
	return (
		<header className="header">
			<a className="logo">
				<i className="fas fa-power-off" />
			</a>
			<nav className="nav-bar">
				<ul className="menu">
					<li className="menu-item">Feed</li>
					<li className="menu-item">Messages</li>
					<li className="menu-item">Notifications</li>
					<li className="menu-item">Settings</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
