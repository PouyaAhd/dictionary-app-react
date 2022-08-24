import "./App.css";
import Dictionary from "./components/Dictionary";

function App() {
  // useEffect(() => {
  //   axios
  //     .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
  //     .then((res) => {
  //       console.log(res);
  //       setWords(res.data[0].meanings);
  //     });
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Dictionary</h1>
      </header>
      <Dictionary/>
    </div>
  );
}

export default App;
