import "./WhatWeDoCard.scss";
import imgQualityRecipes from "../../../images/WhatWeDo/qualityRecipes.svg";
import imgSaveOnGroceries from "../../../images/WhatWeDo/saveOnGroceries.svg";
import imgZeroFoodWaste from "../../../images/WhatWeDo/zeroFoodWaste.svg";

const cardsInfo = {
  qualityRecipes: { imgSrc: imgQualityRecipes, titulo: "Quality Recipes" },
  saveOnGroceries: { imgSrc: imgSaveOnGroceries, titulo: "Save On Groceries" },
  zeroFoodWaste: { imgSrc: imgZeroFoodWaste, titulo: "Zero Food Waste" }
};

function WhatWeDoCard({ tipoCard }) {
  return (
    <div className="what-we-do__card">
      <img
        className="what-we-do__card__img"
        src={cardsInfo[tipoCard].imgSrc}
        alt="pessoa sentada"
      />
      <h1 className="what-we-do__card__titulo">{cardsInfo[tipoCard].titulo}</h1>
    </div>
  );
}

export default WhatWeDoCard;
