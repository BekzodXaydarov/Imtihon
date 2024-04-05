import React, { useMemo } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Language from "./language/Language.json";
import Header from "./pages/Header";
import Section from "./pages/Section";
import Footer from './pages/Footer/index'

export default function App() {
  const ReduxLang = useSelector((state) => state.Redux.value);
  const dispatch = useDispatch();
  const lang = useMemo(
    () => Language.filter((f) => f.title === ReduxLang),
    [ReduxLang])[0].children;
  localStorage.setItem('language', 'en')
  return (
    <div className="App">
      <Header lang={lang.Header} />
      <Section lang={lang.Section} />
      <Footer  />
  
    
    </div>
  );
}
