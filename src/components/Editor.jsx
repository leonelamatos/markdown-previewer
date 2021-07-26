import { useState, useEffect } from 'react';
import Preview from './Preview';
import marked from 'marked';
import DOMPurify from 'dompurify';

const Editor = () => {
	const [text, setText] = useState('This is some text');

	useEffect(() => {
		const textArea = document.querySelector('#editor');
		const output = document.querySelector('#preview-area');
		textArea.addEventListener('scroll', function () {
			console.log(this.scrollTop);

			document.querySelector('#preview-area').scrollTop =
				this.scrollTop * 1.3;
		});
	}, []);

	function onChangeHandler(e) {
		const { value } = e.target;
		const markedDown = DOMPurify.sanitize(marked(value));
		setText(markedDown);
	}

	return (
		<div className='container'>
			<div id='Editor'>
				<h2>Editor Window</h2>
				<div>
					<textarea
						name='editorText'
						id='editor'
						onChange={onChangeHandler}></textarea>
				</div>
			</div>

			<Preview text={text} />
		</div>
	);
};

export default Editor;
