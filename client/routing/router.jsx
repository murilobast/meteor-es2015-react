import React from 'react';
import {mount} from 'react-mounter';
// Local imports
import {MainLayout} from '/client/layouts/MainLayout.jsx';
import Navbar from '/client/components/Navbar.jsx';
import Home from '/client/components/Home.jsx';
import Footer from '/client/components/Footer.jsx';
import ProjectPage from '/client/containers/loadProject.js';
import Console from '/client/components/Console.jsx';

// Defining routes
FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			navbar: <Navbar />,
			content: <Home name="User" />,
			footer: <Footer />
		});
	}
});

FlowRouter.route('/project/:projectId', {
	action(params) {
		mount(MainLayout, {
			navbar: <Navbar />,
			content: <ProjectPage id={params.projectId} />,
			footer: <Footer />
		});
	}
});

FlowRouter.route('/console', {
	action(params) {
		mount(MainLayout, {
			navbar: <Navbar />,
			content: <Console />,
			footer: <Footer />
		});
	}
});