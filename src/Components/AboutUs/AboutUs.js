import React from "react";
import { Container, Segment } from "semantic-ui-react";
import "./AboutUs.css";

const AboutUs = () => {
	return (
		<div className="aboutus__container">
			<Container>
				<Segment>
					Mission
					<div className="aboutusMission_content">
						Elit aute nisi culpa est laborum dolor in incididunt
						dolore qui adipisicing ea non nisi. Eu sit ipsum
						consequat duis veniam enim aute nisi ullamco commodo.
						Labore proident consequat officia magna id. Lorem
						nostrud qui ut sunt est id dolore amet anim nulla
						consequat ea. Cupidatat laborum consequat officia elit
						ex id laboris duis. Sit ipsum eiusmod fugiat ea id
						reprehenderit in nostrud. Occaecat enim quis magna velit
						commodo Lorem excepteur ex occaecat aliquip eu in.
					</div>
				</Segment>

				<Segment>
					Mission
					<div className="aboutusMission_content">
						Elit aute nisi culpa est laborum dolor in incididunt
						dolore qui adipisicing ea non nisi. Eu sit ipsum
						consequat duis veniam enim aute nisi ullamco commodo.
						Labore proident consequat officia magna id. Lorem
						nostrud qui ut sunt est id dolore amet anim nulla
						consequat ea. Cupidatat laborum consequat officia elit
						ex id laboris duis. Sit ipsum eiusmod fugiat ea id
						reprehenderit in nostrud. Occaecat enim quis magna velit
						commodo Lorem excepteur ex occaecat aliquip eu in.
					</div>
				</Segment>

				{/*<Segment placeholder>
					<Grid relaxed="very" stackable columns={2}>
						<Grid.column>
							<div className="aboutUs__caption">
								a life without a <span>cause</span>, is a life
								without an <span>effect</span>
							</div>
						</Grid.column>
						<Divider vertical>Or</Divider>
					</Grid>
	</Segment>*/}
			</Container>
		</div>
	);
};

export default AboutUs;
