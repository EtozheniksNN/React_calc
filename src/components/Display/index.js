import React from 'react';
import styles from './Display.module.css';
import PropTypes from 'prop-types';

const Display = props => (
	
	<div className={styles.display} children={props.children}/>
);

Display.defaultProps = {
	children: '',
};

Display.propTypes = {
	children: PropTypes.string
};



export default Display;
