import React from 'react';

function Bill({ bill, onSetBill }) {
	return (
		<div>
			<label htmlFor='bill'>
				How much was the bill?{' '}
				<input
					type='text'
					id='bill'
					value={bill}
					onChange={(e) => onSetBill(Number(e.target.value))}
				/>
			</label>
		</div>
	);
}

export default Bill;
