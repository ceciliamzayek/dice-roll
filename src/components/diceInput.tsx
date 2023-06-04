export default function DiceInput({
  diceCount,
  handleDiceCountChange,
}: {
  diceCount: number;
  handleDiceCountChange: (count: number) => void;
}) {
  return (
    <div className="dice-input">
      <form>
        <label>Dice Count: </label>
        <input
          type="number"
          id="diceCount"
          name="diceCount"
          value={diceCount}
          onChange={(e) => handleDiceCountChange(e.target.valueAsNumber)}
        />
      </form>
    </div>
  );
}
