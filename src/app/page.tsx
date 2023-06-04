'use client';
import DiceInput from '@/components/diceInput';
import NewDie from '../components/dice/newDie';
import { useState } from 'react';

export default function Home(): React.JSX.Element {
  const [dice, setDice] = useState<React.JSX.Element[]>([]);

  const handleDiceCountChange = (count: number) => {
    if (count > dice.length) addDice(count - dice.length);
    else if (count < dice.length) removeDice(dice.length - count);
  };

  const addDice = (difference: number): void => {
    const newDice: React.JSX.Element[] = [...dice];
    for (let i: number = 0; i < difference; i++) {
      newDice.push(<NewDie key={Math.random()} />);
    }
    setDice(newDice);
  };

  const removeDice = (difference: number): void => {
    const newDice: React.JSX.Element[] = [...dice];
    for (let i: number = 0; i < difference; i++) newDice.pop();
    setDice(newDice);
  };

  return (
    <div>
      <div className="header">
        <h1>Dice Game</h1>
        <DiceInput
          diceCount={dice.length}
          handleDiceCountChange={handleDiceCountChange}
        />
      </div>
      <div className="board">{dice}</div>
    </div>
  );
}
