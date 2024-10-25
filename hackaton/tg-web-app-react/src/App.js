import './App.css';
import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';
import Button from './components/Button/Button';
function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready();
  }, [])
  
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Button onClick={onToggleButton}>toggle</Button>
        <Route index element={<ProductList/>}></Route>
        <Route path={'form'} element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
