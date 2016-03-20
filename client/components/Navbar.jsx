import React from 'react';

// Creating main content component
export default Navbar = ({name}) => (
	<div className="navbar-fixed">
		<nav className="grey darken-4" role="navigation">
			<div className="nav-wrapper container"><a id="logo-container" href="/" className="brand-logo">Deploy</a>
				<ul className="right hide-on-med-and-down">
					<li className="active"><a href="/">Projects</a></li>
					<li><a href="/console">Console</a></li>
				</ul>

				<ul id="nav-mobile" className="side-nav">
					<li><a href="/">Projects</a></li>
					<li><a href="/console">Console</a></li>
				</ul>
				<a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
			</div>
		</nav>
	</div>
);