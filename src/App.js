import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Blog from "./components/Blog"

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
