import { navigateToUrl } from "single-spa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

//@ts-ignore
import { useCounterStore } from "@bb/states";

export const App = (props) => {
  const { count: state, decrement, increment } = useCounterStore();

  console.log(props);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{props.name} is mounted!</h1>

      <div style={{ marginTop: '2rem' }}>
        <a href="/" onClick={event => navigateToUrl(event)}>Goto index</a>
        &nbsp;|&nbsp;
        <a href="/routes/contact" onClick={event => navigateToUrl(event)}>Goto /routes/contact</a>
      </div>

      <div>
        <h2>Counter State: {state}</h2>
        <br />
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>

      <hr />

      <Router basename='/routes'>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/todo-app">Parcel example</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

const Home = () => (
  <h2>Application: Home</h2>
);

const Contact = () => (
  <h2>Application: Contact</h2>
);

const About = () => (
  <h2>Application: About</h2>
);

const PageNotFound = () => (
  <h2>Page not found</h2>
);
