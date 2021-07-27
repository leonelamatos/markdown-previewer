import { useState, useEffect } from 'react';
import Preview from './Preview';
import marked from 'marked';
import DOMPurify from 'dompurify';

const defaultValue = `
# Heading 
## Heading Two
[this is a link](https://github.com)

Inline \`code\`

\`\`\`
Sample text here...
\`\`\`

> This is a block.

+ This Create a list by starting 

![Minion](https://octodex.github.com/images/minion.png)

**This is bold text**

`;
const Editor = () => {
	const [text, setText] = useState(defaultValue);

	useEffect(() => {
		const textArea = document.querySelector('#editor');
		textArea.addEventListener('scroll', function () {
			console.log(this.scrollTop);

			document.querySelector('#preview').scrollTop = this.scrollTop * 1.3;
		});
	}, []);

	function onChangeHandler(e) {
		const { value } = e.target;
		setText(value);
	}

	return (
		<div className='container'>
			<div id='Editor'>
				<h2>Editor Window</h2>
				<div>
					<textarea
						name='editorText'
						id='editor'
						onChange={onChangeHandler}
						value={text}></textarea>
				</div>
			</div>

			<Preview text={text} />
		</div>
	);
};

export default Editor;
