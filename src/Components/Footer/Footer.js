import React from "react";
import {
	Form,
	Input,
	TextArea,
	Button,
	// Select,
	Icon,
	Header,
	Label,
	Segment,
} from "semantic-ui-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import "./Footer.css";

const Socials = (props) => {
	return (
		<div className="footer_socials">
			<div className="footer_socials__wrapper">
				<Icon circular inverted color="black" size="large">
					<props.first />
				</Icon>
				<Label color={props.color1} className="footer_socials_label">
					<p>Something</p>
				</Label>
			</div>
			<div className="footer_socials__wrapper">
				<Icon circular inverted color="black" size="large">
					<props.second />
				</Icon>
				<Label color={props.color2} className="footer_socials_label">
					<p>Something</p>
				</Label>
			</div>
			<div className="footer_socials__wrapper">
				<Icon circular inverted color="black" size="large">
					<props.third />
				</Icon>
				<Label color={props.color3} className="footer_socials_label">
					<p>Something</p>
				</Label>
			</div>
		</div>
	);
};

const Footer = () => (
	<div className="footer_container">
		<div className="footer_header">
			<Header as="h1">contact us</Header>
		</div>
		<div className="footer_main">
			<Socials first={FaInstagram} second={FaTwitch} third={FaLinkedin} color1="green" color2="blue" color3="teal" />
			<div className="footer_Form">
				<Form>
					<Form.Group widths="equal">
						<Form.Field
							id="form-input-control-first-name"
							control={Input}
							label="First name"
							placeholder="First name"
						/>
						<Form.Field
							id="form-input-control-last-name"
							control={Input}
							label="Last name"
							placeholder="Last name"
						/>
						{
							// <Form.Field
							// 	control={Select}
							// 	options={genderOptions}
							// 	label={{
							// 		children: "Gender",
							// 		htmlFor: "form-select-control-gender",
							// 	}}
							// 	placeholder="Gender"
							// 	search
							// 	searchInput={{ id: "form-select-control-gender" }}
							// />4
						}
					</Form.Group>
					<Form.Field
						id="form-textarea-control-opinion"
						control={TextArea}
						label="Opinion"
						placeholder="Opinion"
						rows="5"
					/>
					<Form.Field
						id="form-input-control-error-email"
						control={Input}
						label="Email"
						placeholder="joe@schmoe.com"
						// error={{
						// 	content: "Please enter a valid email address",
						// 	pointing: "below",
						// }}
					/>
					<Form.Field
						id="form-button-control-public"
						control={Button}
						content="Confirm"
						label=""
					/>
				</Form>
			</div>

			<Socials first={FaFacebook} second={GrMail} third={IoCall} color1="orange" color2="violet" color3="red"/>
		</div>
		<div className="footer_footer">
			<Segment inverted textAlign="center"> &copy; Designed and developed by Imran Mirza</Segment>
		</div>
	</div>
);

export default Footer;
