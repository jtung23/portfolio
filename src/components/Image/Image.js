import React from 'react';
import './Image.css';

const Image = props => (
	<div className='image'>
		<img alt="Imagestuff" src={props.image} style={props.style} />
	</div>
)

export default Image