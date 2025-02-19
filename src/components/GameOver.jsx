import { useContext } from 'react';
import { QuizContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';

import './GameOver.css';

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de Jogo!</h2>
      <h3>Pontuação: {quizState.score}</h3>
      <h3>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</h3>
      <img src={WellDone} alt="Fim do Quiz" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  );
}

export default GameOver;