import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'

function CounterApp() {
	const [count, setCount] = createSignal(0)

	const increment = () => setCount(count() + 1)

	return (
		<div class="accounts-container">
			<h1>Accounts</h1>
			<div class="accounts-count-display">
				<span class="accounts-count-label">Count</span>
				{count()}
			</div>
			<button
				onClick={increment}
				class="accounts-button"
			>
				Click Me
			</button>
		</div>
	)
}

render(() => <CounterApp />, document.getElementById('app')!)
