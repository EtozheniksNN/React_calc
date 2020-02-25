import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
	
	return(
		<div{...props}>
		
		</div>
	)
};

Button.propTypes= {
	onClick: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.string,
};

export default Button;

