import React from "react";
import { Container, Header, Image, Segment } from "semantic-ui-react";
import wecare from "../../media/vcare2.jpg";
// import Title from "./WeCareTitle";

// import css
import "./HomePage.css";

const HomePage = () => {
	return (
		<Container className="homePage_contianer">
			<Header as="h1" className="homePage_header">
				we care foundation
			</Header>
			<div className="homePage__main">
				{/*<div className="homePage_titles">
					<Title title="orphans" />
					<Title title="pepole" />
	</div>*/}
				<div className="homePage_image">
				<Image src={wecare} size="medium" />
				</div>
			</div>
			<div className="homePage_tagLine">
			<Segment raised className="homePage__tagLineSegment">
				making youth responsible global citizens through voluntering and
				caring
			</Segment>
			</div>
		</Container>
	);
};

export default HomePage;
