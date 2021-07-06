import "./App.css";
import "./Message.css";

function Message(props) {
  return (
    <div className="Message" style={{ padding: "25px" }}>
      {props.name}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>HW1 is ready! I love React!</h1>
      <Message name="Nathan" />
    </div>
  );
}

export default App;
