import logo from './Logo.png';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1>Welcome to Text-Reversifier!</h1>
        <p>
          This Project is currently under development, please come back later.<br />
          You can view the development status of this app at <a href="https://github.com/Nalin-2005/Text-Reversifier">GitHub</a>.
        </p>
      </header>
    </div>
  );
}

export default App;
