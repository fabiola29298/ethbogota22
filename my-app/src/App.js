import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import GlobalStyles from './styles'
import { light } from './styles/Themes'
import { ThemeProvider } from 'styled-components';


import './App.css';

function App() {
  return (
    <>
      <GlobalStyles/>
      <ThemeProvider theme={light}>
      Appp file
      </ThemeProvider>
    </>
  );
}

export default App;