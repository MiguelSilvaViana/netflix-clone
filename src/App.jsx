import { useState } from 'react';
import reactLogo from './assets/react.svg';
import fetchCategories from './api';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';

import './App.css';
import Nav from './components/Navbar/Nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Nav />
      <Banner />
      {fetchCategories.map((category) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
