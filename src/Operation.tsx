export default function Operation() {

  const box = {
    width: '40px',
    height: '40px',
    margin: '10px',
  }

  return (
    <div style={{ display: 'flex' }} >
      <button style={box} >+</button>
      <button style={box} >-</button>
      <button style={box} >x</button>
      <button style={box} >/</button>
    </div>
  );
}