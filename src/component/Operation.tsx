interface Props {
  startOperation: (type: string) => void;
}

export const Operation: React.FC<Props>  = ({ startOperation }) => {

  const box = {
    width: '40px',
    height: '40px',
    margin: '10px',
  }

  return (
    <div style={{ display: 'flex' }} >
      <button style={box} onClick={e => startOperation("sum")} >+</button>
      <button style={box} onClick={e => startOperation("subtract")} >-</button>
      <button style={box} onClick={e => startOperation("multiply")} >x</button>
      <button style={box} onClick={e => startOperation("divide")} >/</button>
    </div>
  );
}