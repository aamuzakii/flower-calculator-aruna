interface Props {
  startOperation: (type: string) => void;
}

export const Operation: React.FC<Props>  = ({ startOperation }) => {

  return (
    <div style={{ display: 'flex' }} >
      <button className="button" onClick={e => startOperation("sum")} >+</button>
      <button className="button" onClick={e => startOperation("subtract")} >-</button>
      <button className="button" onClick={e => startOperation("multiply")} >x</button>
      <button className="button" onClick={e => startOperation("divide")} >/</button>
    </div>
  );
}