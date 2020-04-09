import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from 'components/Greeting';
import StudentRecords from 'components/StudentRecords';
import Head from 'components/Head';
import Topics from 'components/Topics';
import Content from 'components/Content';

import 'css/index.css';

const App = () => {
	return (
		<>
			<Head/>
			<main className="main-grid">
				<Topics/>
				<Content/>
			</main>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
