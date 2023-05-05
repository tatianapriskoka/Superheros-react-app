
import './App.css';
import SuperheroCard from './superheroCard.jsx';
import jsonHeroes from './superheroesInfo.jsx';

function App() {
  const objSuperheros = JSON.parse(jsonHeroes);
  return (
    <>
      <h1>Супергерои</h1>
      <main className="container">
        {objSuperheros.map((hero) =>
          <SuperheroCard name={hero.name} universe={hero.universe}
            alterego={hero.alterego} occupation={hero.occupation} friends={hero.friends}
            superpowers={hero.superpowers} info={hero.info} url={hero.url}></SuperheroCard>
        )

        }
      </main >

    </>
  );
}

export default App;
