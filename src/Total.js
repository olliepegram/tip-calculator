import React from 'react';

function Total({ total, tip, bill }) {
	return (
		<div>
			<span>
				You pay ${total} (${bill} + ${tip} tip)
			</span>
		</div>
	);
}

export default Total;
