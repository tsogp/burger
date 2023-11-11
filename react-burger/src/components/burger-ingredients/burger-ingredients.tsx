import React from 'react';
import { Logo, BurgerIcon, ListIcon, ProfileIcon  } from '@ya.praktikum/react-developer-burger-ui-components'
import "./burger-ingredients.css";
import MyFetch from "./myFetch";

export default function BurgerIngredients() {
  const url = "https://norma.nomoreparties.space/api/ingredients";
  const { data } = MyFetch(url);
  return(
    <section className="ingredients">
      <h1>abcdefg</h1>
    </section>
    )
}