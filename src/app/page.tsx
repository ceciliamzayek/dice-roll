import One from '../components/dice/one';
import Two from '../components/dice/two';
import Three from '../components/dice/three';
import Four from '../components/dice/four';
import Five from '../components/dice/five';
import Six from '../components/dice/six';

export default function Home() {
  return (
    <div>
      <h1>Dice Game</h1>
      <div className="board">
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
        <Six />
      </div>
    </div>
  );
}
