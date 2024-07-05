import Buttons from "./assets/components/Buttons";
import "./App.css";
import avatar from "./assets/images/avatar-jessica.jpeg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-white text-black w-3/6">
          <img src={avatar} alt="avatar-jessica.jpeg" />
          <h1>Jessica Randal</h1>
          <h2>Lodon, United Kingdom </h2>
          <div>
            <Buttons buttonStyle="bg-zinc-300 p-3" buttonName={"Github"} />
            <Buttons
              buttonStyle="bg-zinc-300 p-3"
              buttonName={"Frontend Mentor"}
            />
            <Buttons buttonStyle="bg-zinc-300 p-3" buttonName={"LinkedIn"} />
            <Buttons buttonStyle="bg-zinc-300 p-3" buttonName={"Twitter"} />
            <Buttons buttonStyle="bg-zinc-300 p-3" buttonName={"Instagram"} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
