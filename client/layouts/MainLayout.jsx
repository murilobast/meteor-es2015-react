import React from 'react';

// Creting router Layout
export const MainLayout = ({navbar, content, footer}) => (
	<div className="app">
		{navbar}
		<div className="container">
			{content}
		</div>
		{footer}
	</div>
);