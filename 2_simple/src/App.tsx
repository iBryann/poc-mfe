import { LifeCycles, navigateToUrl } from "single-spa";
import Parcel from "single-spa-react/parcel";

//@ts-ignore
import { showMessage, Section } from "@bb/utils";
//@ts-ignore
import { useCounterStore, Widget } from "@bb/states";
import { Container, ParcelContainer } from "./styles";
import { useState } from "react";

export const App = (props) => {
  const { count: state, decrement, increment } = useCounterStore();
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{props.name} is mounted!</h1>

      <Section name="Bryann" />

      <Container>
        <a href="/routes" onClick={navigateToUrl}>
          Goto /routes
        </a>
      </Container>

      <div>
        <h2>Counter State: {state}</h2>
        <br />
        <button onClick={decrement}>Decrement</button>
        <button onClick={increment}>Increment</button>

        <button onClick={() => setCounter(counter + 1)}>
          Somar - {counter}
        </button>
      </div>

      <hr />

      <p>
        <button onClick={() => showMessage("Olá!")}>Show message</button>
      </p>

      <ParcelContainer>
        <Parcel
          config={() => System.import<LifeCycles>("@bb/parcel")}
          wrapWith="div"
          wrapClassName="my-widget"
          counter={counter}
          key={counter}
        />

        <Widget />
      </ParcelContainer>
    </div>
  );
};
