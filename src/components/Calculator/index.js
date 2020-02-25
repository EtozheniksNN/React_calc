import React from 'react';
import styles from './Calculator.module.css';
import Display from '../Display';
import Button from '../Button';

class Calculator extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			operand1: '',
			operand2: '',
			setResult: ''
		};
		
	}
	
	setResult = () => {
	
	};
	
	
	
	render () {
		return (
			<div className={styles.container}>
				<Display>Result</Display>
				<table>
					<tbody>
					<tr>
						<td className={styles.controlButton} onClick={''}>
							<Button
								className={styles.button}
								onClick={''}>+</Button></td>
						<td className={styles.controlButton} onClick={''}>
							<Button
								className={styles.button}
								onClick={''}>-</Button></td>
						<td className={styles.controlButton} onClick={''}>
							<Button
								className={styles.button}
								onClick={''}>&#10005;</Button></td>
						<td className={styles.controlButton} onClick={''}>
							<Button
								className={styles.button}
								onClick={''}>&#247;</Button></td>
					</tr>
					<tr>
						<td><Button className={styles.button}
						            onClick={''}>7</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>8</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>9</Button></td>
						<td rowSpan={4} className={styles.equalButton}
						    onClick={''}><Button
							className={styles.button}>=</Button></td>
					
					</tr>
					<tr>
						<td><Button className={styles.button}
						            onClick={''}>4</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>5</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>6</Button></td>
					
					</tr>
					<tr>
						<td><Button className={styles.button}
						            onClick={''}>1</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>2</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>3</Button></td>
					
					</tr>
					<tr>
						<td><Button className={styles.button}
						            onClick={''}>0</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>.</Button></td>
						<td><Button className={styles.button}
						            onClick={''}>C</Button></td>
					
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
	
}

export default Calculator;