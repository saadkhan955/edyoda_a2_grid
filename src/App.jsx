import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import FilterButtons from './components/FilterButtons/FilterButtons';
import Cards from './components/Cards/Cards';
import Data from './Data';

const App = () => {
  const categories = [
    'Artificial Intelligence',
    'Cloud Computing',
    'DevOps',
    'Programming Languages',
    'Mobile Application Development',
    'Technology and Tools',
    'Get a Job in a Tech Company',
    'Others'
  ];

  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };


  return (
    <div>
      <Navbar categories={categories} />
      <FilterButtons filterItem={filterItem}
            setItem={setItem}
            menuItems={menuItems} />
      <Cards item={item} />
    </div>
  );
};

export default App;
