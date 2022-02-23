import "./Hero.scss";
import Container from "../../components/Container/Container";
import imgHappyCustomer1 from "../../images/Header/happyCustomer1.png";
import imgHappyCustomer2 from "../../images/Header/happyCustomer2.png";
import imgHappyCustomer3 from "../../images/Header/happyCustomer3.png";
import starSvg from "../../images/Header/star.svg";
import heroImg from "../../images/Header/heroImg.png";
import heroImg2 from "../../images/Header/heroImg2.png";
import HeroLayout from "../../layout/HeroLayout/HeroLayout";

function Hero() {
  return (
    <HeroLayout>
      <Container cssClasse={"container--principal"}>
        <div className="hero">
          <div className="container-titulo">
            <h1 className="hero__titulo">
              Reduce Food Waste and
              <span className="titulo__destaque"> Save Money</span>
            </h1>
            <p className="hero__paragrafo">
              We want to tackle food waste by recommending recipes based on
              leftover ingredients in the fridge at home
            </p>
            <a className="hero__btn-get-started" href="./getstarted.html">
              Get started
            </a>

            <div className="container-happy-customers">
              <div className="container-imgs-happy-customers">
                <img
                  className="hero__img-happy-customers"
                  src={imgHappyCustomer1}
                  alt="people happy"
                />
                <img
                  className="hero__img-happy-customers"
                  src={imgHappyCustomer2}
                  alt="people happy"
                />
                <img
                  className="hero__img-happy-customers"
                  src={imgHappyCustomer3}
                  alt="people happy"
                />
              </div>
              <div className="container-texto-happy-customers">
                <span className="hero__texto-happy-customers">
                  Our happy customers
                </span>
                <span className="hero__avaliacao-happy-customers">
                  <img
                    className="hero__starSvg"
                    src={starSvg}
                    alt="avaliacao"
                  />
                  4.8 (450+ reviews)
                </span>
              </div>
            </div>
          </div>

          <div className="container-img">
            <img
              className="hero__img"
              srcSet={`${heroImg2} 563w, ${heroImg} 656w, `}
              sizes="(max-width: 900px) 563px, (max-width: 1920px) 656px"
              src={heroImg}
              alt="mulher segurando uma cesta de frutas"
            />
          </div>
        </div>
      </Container>
    </HeroLayout>
  );
}

export default Hero;
