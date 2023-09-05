import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [inputValue, setInputValue] = useState();
    const [result, setResult] = useState();

    useEffect(() => {
        // send req
        const getResult = async () => {
            const psudoResult = await axios.get("https://4afa-146-196-45-149.ngrok-free.app", {
                params: {
                    action: 'query',
                    list: 'search',
                    format: 'json',
                    origin: '*',
                    srsearch: inputValue
                }
            })
            console.log(psudoResult);

            const filteredResult = psudoResult.data.query.search ? psudoResult.data.query.search : '';
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
        <div className="App">
            <center>
                <div>
                    Search Lab React JS
                </div>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <label>Search</label>
                    <br></br>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                </div>
            </center>
        </div>
    );

}

export default App;
