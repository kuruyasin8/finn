import "./style.css";

interface Btn {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

function Button(props: Btn) {
  return (
    <button className="btn" onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
}

export { Button };
