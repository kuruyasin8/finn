interface Button {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick: () => void;
}

function Button(props: Button) {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
}

export { Button };
