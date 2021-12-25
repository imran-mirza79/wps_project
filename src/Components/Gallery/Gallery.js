import React from "react";
import { Container, Segment, Image, Grid } from "semantic-ui-react";
import "./Gallery.css";

const Gallery = () => {
	return (
		<div className="gallery_container">
			<Segment raised className="gallery_segment" textAlign="center">
				loremVeniam mollit culpa id deserunt ipsum enim aute velit
				ullamco qui pariatur ipsum id eu.
			</Segment>

			<Container className="gallery_images">
				<Grid>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />{" "}
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row columns={3}>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />{" "}
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row columns={3}>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />{" "}
						</Grid.Column>
						<Grid.Column>
							<Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	);
};

export default Gallery;
