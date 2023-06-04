'use client';
import DiceInput from '@/components/diceInput';
import createDice from '../components/dice/diceArray';
import { useState } from 'react';

export default function Home() {
  const [diceCount, setDiceCount] = useState(0);

  let dice = createDice(diceCount);
  console.log(dice);

  return (
    <div>
      <h1>Dice Game</h1>
      <DiceInput diceCount={diceCount} setDiceCount={setDiceCount} />
      <div className="board">{dice}</div>
    </div>
  );
}
