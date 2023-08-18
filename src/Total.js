import React from 'react';

function Total({ total, tip, bill }) {
	return (
		<div>
			<span>
				<b>
					You pay ${total} (${bill} + ${tip} tip)
				</b>
			</span>
		</div>
	);
}

export default Total;
