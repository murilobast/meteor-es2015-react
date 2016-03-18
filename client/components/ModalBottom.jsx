import React from 'react';

// Creating Modal component
export default ModalBottom = ({El, identifier, title}) => (
	<div id={identifier} className="modal bottom-sheet">
		<div className="modal-content">
			<h4>{title}</h4>
			<div className="row">
				<El />
			</div>
		</div>
	</div>
);