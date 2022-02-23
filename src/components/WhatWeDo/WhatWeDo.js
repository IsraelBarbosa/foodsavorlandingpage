import "./WhatWeDo.scss";
import Container from "../Container/Container";
import WhatWeDoCard from "./WhatWeDoCard/WhatWeDoCard";
import WhatWeDoLayout from "../../layout/WhatWeDoLayout/WhatWeDoLayout";

function WhatWeDo() {
  return (
    <WhatWeDoLayout>
      <Container cssClasse={"container--principal"}>
        <div className="what-we-do">
          <h1 className="what-we-do__titulo">WHAT WE DO</h1>
          <h2 className="what-we-do__sub-titulo">
            We help thousands of people reduce food waste.
          </h2>
          <div className="container-what-we-do-card">
            <WhatWeDoCard tipoCard={"qualityRecipes"} />
            <WhatWeDoCard tipoCard={"saveOnGroceries"} />
            <WhatWeDoCard tipoCard={"zeroFoodWaste"} />
          </div>
        </div>
      </Container>
    </WhatWeDoLayout>
  );
}

export default WhatWeDo;
