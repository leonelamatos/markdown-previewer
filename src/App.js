import Editor from './components/Editor';
// import Preview from './components/Preview';

import './assets/css/main.min.css';

function App() {
	return (
		<div className='App'>
			<h1>Markdown Previewer</h1>
			<Editor />
			{/* <Preview /> */}
		</div>
	);
}

export default App;
