import React from 'react';

const Preview = ({ text }) => {
	return (
		<div id='Preview'>
			<h2>Preview Window</h2>
			<div id='preview-area' dangerouslySetInnerHTML={{ __html: text }}>
				{/* {text} */}
			</div>
		</div>
	);
};

export default Preview;
