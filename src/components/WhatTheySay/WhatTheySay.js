import "./WhatTheySay.scss";
import Container from "../Container/Container";
import WhatTheySayCard from "./WhatTheySayCard/WhatTheySayCard";
import WhatTheySayLayout from "../../layout/WhatTheySayLayout/WhatTheySayLayout";

function WhatTheySay() {
  return (
    <WhatTheySayLayout>
      <Container cssClasse={"container--principal"}>
        <div className="what-they-say">
          <h1 className="what-they-say__titulo">WHAT THEY SAY</h1>
          <h2 className="what-they-say__sub-titulo">
            What our customers say about us ?
          </h2>
          <div className="what-they-say-container-cards">
            <WhatTheySayCard depoimentoDo_a={"jessicafromCanada"} />
            <WhatTheySayCard depoimentoDo_a={"markFromUSA"} />
            <WhatTheySayCard depoimentoDo_a={"sophiaFromIndia"} />
          </div>
        </div>
      </Container>
    </WhatTheySayLayout>
  );
}

export default WhatTheySay;
