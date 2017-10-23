import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header.js';
import LinkCreate from './components/link_create.js';
import { Links } from '../imports/collections/links.js';
import LinkList from './components/link_list';
const App=() =>{
	return(
		<div>
			<Header />
			<LinkCreate />
			<LinkList />
		</div>
		);

};

Meteor.startup(()=> {
	ReactDOM.render(<App />, document.querySelector('.render-target'));
});