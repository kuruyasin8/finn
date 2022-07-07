interface TextField {
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

function TextField(props: TextField) {
  return (
    <input
      onChange={props.onChange}
      style={{ ...props.style, width: 100, height: 40 }}
    >
      {props.children}
    </input>
  );
}

export { TextField };
