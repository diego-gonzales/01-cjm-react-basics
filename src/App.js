import logo from "./logo.svg";
import "./App.css";
import RelojHooks from "./components/01-RelojHooks";
import AjaxHooks from "./components/02-AjaxHooks";
import CustomHooks from "./components/03-CustomHooks";
import Referencias from "./components/04-Referencias";
import Formularios from "./components/05-Formularios";
import Formularios2 from "./components/05-Formularios2";
import Estilos from "./components/06-Estilos";
import StyledComponents from "./components/07-StyledComponents";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <section>
          {/* <RelojHooks /> */}
          {/* <AjaxHooks /> */}
          {/* <CustomHooks /> */}
          {/* <Referencias /> */}
          {/* <Formularios /> */}
          {/* <Formularios2 /> */}
          {/* <Estilos /> */}
          <StyledComponents />
        </section>
      </header>
    </div>
  );
}

export default App;
