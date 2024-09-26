//@ts-ignore
import { showMessage } from "@bb/utils";
import { Container } from "./styles";
import { AppProps } from "single-spa";

export interface IProps extends AppProps {
  counter: number;
}

export const Widget = (props: IProps) => {
  console.log({ props });

  return (
    <Container>
      <h2>Parcel widget - {props.counter}</h2>

      <button onClick={() => showMessage("Parcel widget!")}>My button</button>
    </Container>
  );
};
