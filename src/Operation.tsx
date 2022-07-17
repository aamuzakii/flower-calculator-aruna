import { Todo } from './model/models'

interface Props {
  startOperation: () => void;
}

export const Operation: React.FC<Props>  = ({ startOperation }) => {

  const box = {
    width: '40px',
    height: '40px',
    margin: '10px',
  }

  const handleClick = (e: any) => {
    console.log(e)
  }

  return (
    <div style={{ display: 'flex' }} >
      <button style={box} onClick={startOperation} >+</button>
      <button style={box} onClick={startOperation} >-</button>
      <button style={box} onClick={startOperation} >x</button>
      <button style={box} onClick={startOperation} >/</button>
    </div>
  );
}