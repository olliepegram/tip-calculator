import { useState } from 'react';
import './App.css';
import Bill from './Bill';
import Percentage from './Percentage';
import Total from './Total';

function App() {
	const [bill, setBill] = useState(0);
	const [percent, setPercent] = useState([]);
	const tip =
		(bill * (percent[percent.length - 2] + percent[percent.length - 1])) /
		2 /
		100;
	const total = Math.round((bill + tip) * 100) / 100;

	const handleSetBill = (updatedBill) => {
		setBill(updatedBill);
	};

	const handleSetPercent = (updatedPercent) => {
		setPercent([...percent, updatedPercent]);
	};

	console.log(typeof bill);
	console.log(percent[percent.length - 2]);
	console.log(percent[percent.length - 1]);
	console.log(total);

	return (
		<div className='App'>
			<Bill
				bill={bill}
				onSetBill={handleSetBill}
			/>
			<Percentage
				percent={percent}
				onSetPercent={handleSetPercent}
			>
				<span>How do you like the service? </span>
			</Percentage>
			<Percentage
				percent={percent}
				onSetPercent={handleSetPercent}
			>
				<span>How did your mate like the service? </span>
			</Percentage>
			{bill && percent[percent.length - 2] && percent[percent.length - 1] && (
				<Total
					total={total}
					tip={tip}
					bill={bill}
				/>
			)}
		</div>
	);
}

export default App;
