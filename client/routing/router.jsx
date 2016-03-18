import React from 'react';
import {mount} from 'react-mounter';
// Local imports
import {MainLayout} from '/client/layouts/MainLayout.jsx';
import Navbar from '/client/components/Navbar.jsx';
import Home from '/client/components/Home.jsx';
import Footer from '/client/components/Footer.jsx';

// Defining routes
FlowRouter.route("/", {
	action() {
		mount(MainLayout, {
			navbar: <Navbar />,
			content: <Home name="User" />,
			footer: <Footer />
		});
	}
});