import React from 'react';

function Percentage({ children, onSetPercent }) {
	return (
		<div>
			<label htmlFor='percent'>
				{children}
				<select
					name='percent'
					id='percent'
					onChange={(e) => onSetPercent(+e.target.value)}
				>
					<option value={0}>Dissatisfied (0%)</option>
					<option value={5}>Okay (5%)</option>
					<option value={10}>Good (10%)</option>
					<option value={20}>Amazing (20%)</option>
				</select>
			</label>
		</div>
	);
}

export default Percentage;
