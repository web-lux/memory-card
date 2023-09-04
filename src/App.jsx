import { useEffect, useState } from 'react';
import './App.scss';
import Cards from './Components/Cards';
import Header from './Components/Header';

function App() {
  const placeholder = [{
    "name": "abalone",
    "url": "https://nookipedia.com/wiki/Abalone",
    "number": "17",
    "image_url": "https://dodo.ac/np/images/0/04/Abalone_NH_Icon.png",
    "render_url": "https://dodo.ac/np/images/f/fd/Abalone_NH.png",
    "catchphrase": "I got an abalone! Why do I want a sandwich now?",
    "catchphrase2": "",
    "shadow_size": "Medium",
    "shadow_movement": "Medium",
    "rarity": "",
    "total_catch": "20",
    "sell_nook": "2000",
    "tank_width": "1",
    "tank_length": "1",
    "time": "4 PM – 9 AM",
    "n_availability": "Jun – Jan",
    "s_availability": "Dec – Jul",
    "catchphrases": [
      "I got an abalone! Why do I want a sandwich now?"
    ],
    "availability_north": [
      {
        "months": "Jun – Jan",
        "time": "4 PM – 9 AM"
      }
    ],
    "availability_south": [
      {
        "months": "Dec – Jul",
        "time": "4 PM – 9 AM"
      }
    ],
    "times_by_month_north": {
      "1": "4 PM – 9 AM",
      "2": "NA",
      "3": "NA",
      "4": "NA",
      "5": "NA",
      "6": "4 PM – 9 AM",
      "7": "4 PM – 9 AM",
      "8": "4 PM – 9 AM",
      "9": "4 PM – 9 AM",
      "10": "4 PM – 9 AM",
      "11": "4 PM – 9 AM",
      "12": "4 PM – 9 AM"
    },
    "times_by_month_south": {
      "1": "4 PM – 9 AM",
      "2": "4 PM – 9 AM",
      "3": "4 PM – 9 AM",
      "4": "4 PM – 9 AM",
      "5": "4 PM – 9 AM",
      "6": "4 PM – 9 AM",
      "7": "4 PM – 9 AM",
      "8": "NA",
      "9": "NA",
      "10": "NA",
      "11": "NA",
      "12": "4 PM – 9 AM"
    },
    "n_availability_array": [
      "1",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    "s_availability_array": [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "12"
    ]
  }];
  
  const [creatures, setCreatures] = useState(placeholder);

  useEffect(() => {
    async function getData() {
      // Appel de l'API
      const res = await fetch("https://api.nookipedia.com/nh/sea", {
        headers: {
          "X-API-KEY": "ea319014-7092-44d6-81e6-96a772515134",
          "Accept-Version": "1.0.0"
        }
      });
      const data = await res.json();
      // On réduit l'array reçu à 12 entrées pour les 12 cartes du jeu puis on l'assigne à la variable "creatures"
      setCreatures(await data.filter((obj) => data.indexOf(obj) < 12));
    }

    getData();
  }, []);

  return (
    <div className='wrapper'>
      <Header />
      <Cards creatures={creatures} />
    </div>
  )
}

export default App
