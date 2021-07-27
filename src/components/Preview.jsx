import marked from 'marked';
import DOMPurify from 'dompurify';

const Preview = ({ text }) => {
	return (
		<div id='Preview'>
			<h2>Preview Window</h2>
			<div
				id='preview'
				dangerouslySetInnerHTML={{
					__html: DOMPurify.sanitize(marked(text, { breaks: true })),
				}}
			/>
		</div>
	);
};

export default Preview;
