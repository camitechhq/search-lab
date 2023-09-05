import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    // send req
    const getResult = () => {
      const psudoResult = axios.get("https://4afa-146-196-45-149.ngrok-free.app/search", {
        params: {
          string: inputValue
        }
      }).then((e) => {
        console.log(e);
      }).catch((error) => {
        console.log("error --> " + error)
      })

      const filteredResult = psudoResult.XYZ ? psudoResult.XYZ : '';
      setResult(filteredResult);
    }

    const timerid = setTimeout(() => {
      if (inputValue) {
        getResult();
      }
    }, 300)


    return () => {
      clearTimeout(timerid)
    }
  }, [inputValue])


  // console.log(data);
  console.log("Input Value --> " + inputValue);
  console.log(result);

  return (
    <div className="App" style={{ background: "#202020", height: "100vh", color: "#fff" }}>
      <center style={{ position: "relative", top: "300px" }}>
        <div>
          Search Lab React JS
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          <label>Search</label>
          <br></br>
          <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} style={{ background: "#505050", color: "#fff" }} />
        </div>
      </center >
    </div >
  );

}

export default App;
