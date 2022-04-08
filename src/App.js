
import "./App.css";
import Navbar from "./components/navbar";
import Textarea from "./components/textarea";
// import About from "./components/about";
import { useState } from "react";
import Alert from "./components/alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showalert("dark mode is activated", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode is activated", "success");
    }
  };

  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Word Analyzer"
          mode={mode}
          toggleMode={toggleMode}
          alert={alert}
          show={showalert}
        />
        <Alert alert={alert} />
        <div className="container">
          {/* <Switch> */}
            {/* <Route exact path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route exact path="/textArea"> */}
              <Textarea
                heading="Enter the text to analyze"
                mode={mode}
                alert={alert}
                show={showalert}
              />
            {/* </Route> */}
            {/* <Route exact path="/"> */}
              {/* <Textarea
                heading="Enter the text to analyze"
                mode={mode}
                alert={alert}
                show={showalert}
              /> */}
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
