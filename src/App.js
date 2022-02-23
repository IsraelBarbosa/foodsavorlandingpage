import "./App.css";
import AreYouReady from "./components/AreYouReady/AreYouReady";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatTheySay from "./components/WhatTheySay/WhatTheySay";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <WhatWeDo />
      <WhatTheySay />
      <AreYouReady />
    </>
  );
}

export default App;
