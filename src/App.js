import React from 'react';
// import pages
import About from './pages/About';
import Work from './pages/Work';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
//import components
import Nav from './components/Nav';

import GlobalStyle from './GlobalStyle';

function App() {
	return (
		<div>
			<GlobalStyle />
			<Nav />
			<About />
			<Skills />
			<Work />
			<br />
			<br />

			<Contact />
		</div>
	);
}

export default App;
