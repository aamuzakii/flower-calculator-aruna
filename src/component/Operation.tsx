import { MathOperation } from '../types/MathOperation';

interface Props {
  startOperation: (type: MathOperation) => void;
}

export const Operation: React.FC<Props>  = ({ startOperation }) => {

  return (
    <div style={{ display: 'flex' }} >
      <button className="button" onClick={_=> startOperation("sum")} >+</button>
      <button className="button" onClick={_=> startOperation("subtract")} >-</button>
      <button className="button" onClick={_=> startOperation("multiply")} >x</button>
      <button className="button" onClick={_=> startOperation("divide")} >/</button>
    </div>
  );
}