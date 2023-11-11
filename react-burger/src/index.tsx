import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppHeader from './components/app-header/app-header';
import BurgerIngredients from './components/burger-ingredients/burger-ingredients';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="main-window">
      <AppHeader />
      <main className="main">
        <BurgerIngredients />
      </main>
    </div>
  </React.StrictMode>
);

reportWebVitals();
