function Calculator() {
  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input type="range" min="1" max="5" />
          <span>X</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input type="range" min="30" max="180" step="30" />
          <span>X sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input type="range" min="1" max="10" />
          <span>X minutes/break</span>
        </div>
      </form>
      <section>
        <button>-</button>
        <p>00:00</p>
        <button>+</button>
      </section>
    </>
  );
}

export default Calculator;
