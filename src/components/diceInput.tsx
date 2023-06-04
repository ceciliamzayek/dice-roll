export default function DiceInput({
  diceCount,
  handleDiceCountChange,
}: {
  diceCount: number;
  handleDiceCountChange: (count: number) => void;
}) {
  const handleInputChange = (inputCount: number) => {
    if (inputCount > 0 && inputCount < 100) handleDiceCountChange(inputCount);
    else alert('Please input a number between 1 and 99');
  };

  return (
    <div className="dice-input">
      <label>
        <h2>Dice Count</h2>
      </label>
      <input
        type="number"
        id="diceCount"
        name="diceCount"
        min={0}
        max={99}
        value={diceCount}
        onChange={(e) => handleInputChange(e.target.valueAsNumber)}
      />
    </div>
  );
}
