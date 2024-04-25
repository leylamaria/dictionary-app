import logo from "./Logopur.png";
import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="surf" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://yinarts.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <img src={logo} className="logo-footer" alt="Logo" />
            </a>
            , open-sourced on
            <a
              href="https://github.com/leylamaria"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            and hosted on{" "}
            <a
              href="https://yinarts-dictionary.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
