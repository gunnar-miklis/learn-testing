import './main.css';
import sum from './src/sum';

const app = document.querySelector( '#app' );
const array = [ 5, 2, 8, 4, 9, 12 ];

app.innerHTML = `
	<div>
		<h1>Vitest</h1>
		<p>
			The sum of ${ array.join( ' + ' ).toString() } = 
			<strong>${ sum( array ).toString() }</strong>
		</p>
	</div>
`;
