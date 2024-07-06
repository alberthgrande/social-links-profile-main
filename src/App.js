import Buttons from "./components/Buttons";
import "./App.css";
import avatar from "./assets/images/avatar-jessica.jpeg";
function App() {
  return (
    <div className="App h-dvh flex flex-row min-h-screen justify-center items-center">
      <div className="bg-black text-white w-10/12">
        <img src={avatar} alt="avatar-jessica.jpeg" />
        <h1>Jessica Randal</h1>
        <h2>Lodon, United Kingdom </h2>
        <div className="max-w-full">
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
    </div>
  );
}

export default App;
