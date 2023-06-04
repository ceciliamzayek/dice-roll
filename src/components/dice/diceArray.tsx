import One from './one';
import Two from './two';
import Three from './three';
import Four from './four';
import Five from './five';
import Six from './six';

export default function CreateDice(diceCount: number): number[] {
  const dice = new Array(diceCount);

  console.log(`Create ${diceCount} dice`);

  for (let i: number = 0; i < diceCount; i++) {
    let rand = random();

    switch (rand) {
      case 1:
        dice[i] = <One />;
        break;
      case 2:
        dice[i] = <Two />;
        break;
      case 3:
        dice[i] = <Three />;
        break;
      case 4:
        dice[i] = <Four />;
        break;
      case 5:
        dice[i] = <Five />;
        break;
      case 6:
        dice[i] = <Six />;
        break;
    }
  }

  return dice;
}

function random(): number {
  return Math.floor(Math.random() * 6 + 1);
}
