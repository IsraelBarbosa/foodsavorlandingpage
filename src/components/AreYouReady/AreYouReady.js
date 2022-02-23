import "./AreYouReady.scss";
import Container from "../Container/Container";
import AreYouReadyLayout from "../../layout/AreYouReadyLayout/AreYouReadyLayout";

function AreYouReady() {
  return (
    <AreYouReadyLayout>
      <Container cssClasse={"container--principal"}>
        <div className="are-you-ready">
          <h1 className="are-you-ready__titulo">
            Are you ready to fight against food waste ?
          </h1>

          <a className="are-you-ready__btn" href="./joinNow.html">
            Join Now
          </a>
        </div>
      </Container>
    </AreYouReadyLayout>
  );
}

export default AreYouReady;
