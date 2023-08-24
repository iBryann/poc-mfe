//@ts-ignore
import { showMessage } from '@bb/utils';
import { Container } from './styles';

export const Widget = () => {

  return (
    <Container>
      <h2>Lib widget</h2>

      <button onClick={() => showMessage('Lib widget!')}>
        My button
      </button>
    </Container>
  );
}