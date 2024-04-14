import "./App.css";
import "./index.css";
import { Article, Brand, NavBar, CTA, Features } from "./components";
import { Possibility, WhatGPT3, Header, Blog, MainFooter } from "./containers";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <MainFooter />
    </div>
  );
}

export default App;
