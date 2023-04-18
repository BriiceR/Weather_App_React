import { useEffect, useState } from 'react';
import './App.css';
import Button from './header/buttonCF';
import Logo from './header/logo';
import Main from './main';
import Details from './main/details';
import Forecast from './main/forecast';


function App() {
  // Définition des états pour stocker les données météorologiques, l'état de chargement, les erreurs et le terme de recherche saisi par l'utilisateur
  const [datas, setDatas] = useState([]);
  const [datas2, setDatas2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [term, setTerm] = useState('');

  // Fonction qui gère la soumission du formulaire de recherche
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    // Récupération de la saisie de l'utilisateur
    const userInput = event.currentTarget.elements.Input.value;
    setTerm(userInput);
    // Définition de l'état de chargement à true pour afficher le spinner de chargement
    setIsLoading(true);
    try {
      // Appel à l'API pour récupérer les données météorologiques
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput},&APPID=${process.env.REACT_APP_NOT_SECRET_CODE}`);
      const data = await response.json();

      // Appel à l'API pour récupérer les données météorologiques
      const response2 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${userInput},&APPID=${process.env.REACT_APP_NOT_SECRET_CODE}`);
      const data2 = await response2.json();

      // Mise à jour de l'état des données météorologiques
      setDatas(data);
      setDatas2(data2);

      console.log(datas);
      console.log(datas2);
    } catch (error) {
      // En cas d'erreur, définition de l'état d'erreur
      console.log('Error data :', error);
      setError(
        'Désolé, une erreur est survenue au chargement des données'
      );
    } finally {
      // Définition de l'état de chargement à false pour masquer le spinner de chargement
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {error ? (
        <p>{error}</p>
      ) : isLoading ? (
        <div className="loader"></div>
      ) : (
        <>
          <header>
            <Logo />
            {/* Formulaire de recherche avec le champ de saisie et le bouton "GO!" */}
            <form onSubmit={handleSearchSubmit}>
              <label htmlFor="Input"></label>
              <input className='search' id="Input" type="text" />
              <button className='go' type="submit">GO!</button>
            </form>
            <Button />
          </header>
          <main>
            {/* Affichage des données météorologiques dans le composant Main */}
            <Main datas={datas} datas2={datas2} />
            <Forecast datas2={datas2} datas={datas} />
          </main>
          <Details datas={datas} />
        </>
      )}
    </div>
  );
}
export default App;
