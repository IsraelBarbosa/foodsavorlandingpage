import "./WhatTheySayCard.scss";
import imgStar from "../../../images/WhatTheySay/star.svg";
import { useEffect } from "react";

const dadosCard = {
  jessicafromCanada: {
    depoimento:
      "I used to throw away veggies that were about to expire. Now I save money  and reduce food waste",
    star: 5,
    nome: "-Jessica from Canada",
  },
  markFromUSA: {
    depoimento:
      "I feel that I eat out less and get better at cooking by using their easy websites.",
    star: 5,
    nome: "-Mark from USA",
  },
  sophiaFromIndia: {
    depoimento: "Its easy to use! I love that I can select my ingredients (:",
    star: 4,
    nome: "-Sophia from India",
  },
};

let starImgs = "";
let containerStarsIndex = 0;

function WhatTheySayCard({ depoimentoDo_a }) {
  useEffect(() => {
    function setStars() {
      let containerStars = document.querySelectorAll(
        ".what-they-say-card-container-stars"
      )[containerStarsIndex++];

      let lenghtStar = dadosCard[depoimentoDo_a].star;

      for (let i = 0; i < lenghtStar; i++) {
        starImgs += `<img class="what-they-say__star" src="${imgStar}" alt="star" />`;
      }

      containerStars.innerHTML = starImgs;
      starImgs = "";
    }

    setStars();
  }, []);

  return (
    <div className="what-they-say__card">
      <p className="what-they-say__card__paragrafo">
        {dadosCard[depoimentoDo_a].depoimento}
      </p>
      <div className="container-stars-e-card-nome">
        <div className="what-they-say-card-container-stars"></div>
        <div className="what-they-say__card__nome">
          {dadosCard[depoimentoDo_a].nome}
        </div>
      </div>
    </div>
  );
}

export default WhatTheySayCard;
