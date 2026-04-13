import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'

function App() {
	const [count, setCount] = createSignal(0)

	return (
		<div>
			<h1>Hello World</h1>
			<p>
				Count:
				{count()}
			</p>
			<button onClick={() => setCount(c => c - 1)}>-</button>
			<button onClick={() => setCount(c => c + 1)}>+</button>
		</div>
	)
}

render(() => <App />, document.getElementById('app')!)
