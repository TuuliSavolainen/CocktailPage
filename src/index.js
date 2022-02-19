
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import database from './db/cocktails.json'
import react, { useState } from "react";

export default function App() {

  // saving lists from database to use in components
  const cocktails = database.cocktails
  const ingridients = database.ingridients
  console.log(ingridients)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home cocktails={cocktails} ingridients = {ingridients} />} />
  
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)