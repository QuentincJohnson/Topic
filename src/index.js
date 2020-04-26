import React from 'react';
import ReactDOM from 'react-dom';
import Content from 'components/Content';

import 'css/index.css';
import 'css/reset.css'

const App = () => {
	return (
		<>
			<main className="main-grid main-grid-m-fix">
				<Content/>
			</main>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
