import "./App.css";
import MyButton from "./components/ButtonComponent";
import ImageClassComponent from "./components/ImageClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton buttonName="Ciao" />
        <ImageClassComponent
          src="https://placekitten.com/300/300"
          alt="kitten image"
        />
        <ImageClassComponent
          src="https://placekitten.com/400/400"
          alt="kitten image2"
        />
      </header>
    </div>
  );
}

export default App;
