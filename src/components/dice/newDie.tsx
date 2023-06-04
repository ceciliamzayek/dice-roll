import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';
import Six from './six';

export default function NewDie() {
  let rand = random();

  switch (rand) {
    case 1:
      return <One />;
    case 2:
      return <Two />;
    case 3:
      return <Three />;
    case 4:
      return <Four />;
    case 5:
      return <Five />;
    case 6:
      return <Six />;
    default:
      return <p>There was an error in creating a new die!</p>;
  }
}

function random(): number {
  return Math.floor(Math.random() * 6 + 1);
}
