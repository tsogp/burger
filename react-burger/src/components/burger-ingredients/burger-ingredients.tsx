import React, { useEffect, useState } from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import "./burger-ingredients.css";
import BurgerService from "../../services/burger/BurgerService";
import { IBurger } from "../../services/burger/types";

export default function BurgerIngredients() {
  const [data, setData] = useState<IBurger[]>([]);
  
  useEffect(() => {
    async function fetchData() {
      const result = await BurgerService.getBurgers();
      setData(result.data);
    }
    
    fetchData();
  }, [])

  return (
    <section className="ingredients">
      <h1>abcdefg</h1>
      <div>
        {data.map((item) => (
          <div key={item._id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}