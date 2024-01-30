import { LifeCycles, navigateToUrl } from 'single-spa';

import { Container } from './styles';

export const App = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page not found</h1>
      <hr />
      <h3>{props.name}</h3>

      <Container>
        <a href="/" onClick={navigateToUrl}>
          Goto home
        </a>
      </Container>
    </div>
  );
};