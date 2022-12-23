import * as React from 'react'
import ReactDOM from 'react-dom/client';

// import logo from 'assets/logo.png';

// App Component
const App = () => (<div>
  <h1>Hello, ESBUILD!</h1>
  <Panel />
  !<img src="assets/logo.png" />!
</div>)

// Panel Component
const Panel = () => (<h2>I'm a Panel</h2>);

// Mount component
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(<App />);
