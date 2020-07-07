import React from 'react';


const Scroll = (props) => {
	return (
			<div style={{ overflowY: 'Scroll', border: '5px dash black', height:'800px'}}>
				{props.children}
			</div>
		);
}


export default Scroll;