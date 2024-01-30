import { LifeCycles, navigateToUrl } from 'single-spa';
import Parcel from 'single-spa-react/parcel';

//@ts-ignore
import { showMessage } from '@bb/utils';
//@ts-ignore
import { useCounterStore, Widget } from '@bb/states';
import { Container, ParcelContainer } from './styles';

export const App = (props) => {
  const { count: state, decrement, increment } = useCounterStore();

  console.log(props);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{props.name} is mounted!</h1>

      <Container>
        <a href="/routes" onClick={(event) => navigateToUrl(event)}>
          Goto /routes
        </a>
      </Container>

      <div>
        <h2>Counter State: {state}</h2>
        <br />
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>
      </div>

      <hr />

      <p>
        <button onClick={() => showMessage('Olá!')}>Show message</button>
      </p>

      <ParcelContainer>
        <Parcel
          config={() => System.import<LifeCycles>('@bb/parcel')}
          wrapWith="div"
          wrapClassName="my-widget"
        />

        <Widget />
      </ParcelContainer>
    </div>
  );
};