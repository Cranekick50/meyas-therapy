import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/Navbar/Navbar'

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>

function App() {
  return (
    <div>
      <div>
        <Navigator />
      </div>
      <div className="App">
        <header className="Title">
          Meya's Therapy Page
        </header>
      </div>

    </div>

  );
}

export default App;
