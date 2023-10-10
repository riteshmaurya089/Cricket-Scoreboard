import logo from './logo.svg';
import './App.css';
import MyButton from"./Components/MyButton";
import MyComponent from './Components/MyComponent';
import ScoreBoard from"./Components/ScoreBoard";

function App() {
  const btnText = " Click here";
  const btnText2 = "to, continue";
  const text1  = "Click here to start"
  return (
    <div className="App">
      {/* <h1>This is s1d3</h1> */}
      {/* <MyButton btnText={btnText} btnText2={btnText2}/>
      <MyButton btnText={text1}/> */}
      {/* <MyComponent /> */}
      <ScoreBoard />
    </div>
  );
}

export default App;
