import data from './data';
import { useState } from 'react';
import List from './List';

const App = () => {
  const [people,setPeople]=useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Click me
        </button>
      </section>
    </main>
  )
};
export default App;
