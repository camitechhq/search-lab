import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [inputValue, setInputValue] = useState();
  const [result, setResult] = useState([]);

  useEffect(() => {
    // send req
    const getResult = async () => {
      const psudoResult = await axios.get("https://4afa-146-196-45-149.ngrok-free.app/search", {
        params: {
          string: inputValue
        }
      })
      console.log(psudoResult.data.camiTruck);

      const filteredResult = psudoResult.data.camiTruck ? psudoResult.data.camiTruck : '';
      setResult(filteredResult);
    }

    const timerid = setTimeout(() => {
      if (inputValue) {
        getResult();
      }
    }, 100)


    return () => {
      clearTimeout(timerid)
    }
  }, [inputValue])


  // console.log("Input Value --> " + inputValue);

  const renderMeds = result && result.map((med) => {
    return (
      <div>
        {med.name}
      </div>
    )
  })

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
        <div>
          {renderMeds}
        </div>
      </center >
    </div >
  );

}

export default App;
