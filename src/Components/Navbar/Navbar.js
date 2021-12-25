import React from "react";
import { List, Segment } from "semantic-ui-react";
import "./Navbar.css";

const Navbar = () => (
	<div className="navbar_container">
		<Segment inverted className="navbar_list">
			<List horizontal relaxed inverted floated="right">
				<List.Item>
					<List.Content as="a" href="/">
						<List.Header>Home</List.Header>
					</List.Content>
				</List.Item>

				<List.Item>
					<List.Content as="a" href="/about">
						<List.Header>About Us</List.Header>
					</List.Content>
				</List.Item>

				<List.Item>
					<List.Content as="a" href="/gallery">
						<List.Header>Gallery</List.Header>
					</List.Content>
				</List.Item>

				<List.Item>
					<List.Content as="a" href="/login">
						<List.Header>Login</List.Header>
					</List.Content>
				</List.Item>
			</List>
		</Segment>
	</div>
);

export default Navbar;
