export default function DiceInput({
  diceCount,
  setDiceCount,
}: {
  diceCount: number;
  setDiceCount: React.Dispatch<React.SetStateAction<number>>;
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
          onChange={(e) => setDiceCount(e.target.valueAsNumber)}
        />
      </form>
    </div>
  );
}
