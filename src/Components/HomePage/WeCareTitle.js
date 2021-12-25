import React from "react";
import { Header } from "semantic-ui-react";
import './Title.css'

const Title = ({ title }) => {
	return (
		<Header className="title_container">
			<pre>We Care for</pre>
            <div className="title_segment">
                {title}
            </div>
		</Header>
	);
};

export default Title;
