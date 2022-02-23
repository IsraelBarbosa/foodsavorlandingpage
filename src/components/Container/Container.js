import "./Container.scss";

function Container({ children, cssClasse }) {
  return <div className={`container${cssClasse !== undefined ? ` ${cssClasse}` : ``}`}>{children}</div>;
}

export default Container;
