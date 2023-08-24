//@ts-ignore
import { showMessage } from '@bb/utils';
import { Container } from './styles';

export const Widget = (props) => {
  return (
    <Container>
      <h2>Parcel widget</h2>

      <button onClick={() => showMessage('Parcel widget!')}>
        My button
      </button>
    </Container>
  );
}