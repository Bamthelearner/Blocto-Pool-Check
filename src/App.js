import React ,{useState}from "react";
import ComboBox from "react-responsive-combo-box";
import "react-responsive-combo-box/dist/index.css";

import * as fcl from "@onflow/fcl";
import * as types from "@onflow/types";

import { masterScript} from "./cadence/code.js";

import "./styles.css";


fcl.config()
  .put("accessNode.api", "https://access-mainnet-beta.onflow.org")
  .put("discovery.wallet", "https://fcl-discovery.onflow.org/authn")

function App() {

  const [scriptResult, setScriptResult] = useState([]);


  const [selectedOption, setSelectedOption] = useState("");


  const options = [
    "BltUsdtSwapPair",
    "FlowSwapPair",
    "FusdUsdtSwapPair",
    "RevvFlowSwapPair",
    "UsdcUsdtSwapPair"
  ];

  const view = async () => {
    const result = await fcl.send([
      fcl.script(masterScript),
      fcl.args([fcl.arg(selectedOption.toString(), types.String)
      ])
    ]).then(fcl.decode);

    console.log(setSelectedOption.toString());
    console.log(result);
    setScriptResult(result);
  }


return (
  <div className="App">
    <h1>BloctoSwap Pool Amount</h1>
    <p>
      The selected pool -{" "}
      <span style={{ fontWeight: "bold" }}>
        {" "}
        {selectedOption.length > 0 ? selectedOption : ""}
      </span>
    </p>
    <p>
    {selectedOption.length > 0 ? scriptResult[0] : "Token 1"} - {" "}
      <span style={{ fontWeight: "bold" }}>
        {" "}
        {selectedOption.length > 0 ? scriptResult[2] : ""}
      </span>
    </p>
    <p>
    {selectedOption.length > 0 ? scriptResult[1] : "Token 2"} - {" "}
      <span style={{ fontWeight: "bold" }}>
        {" "}
        {selectedOption.length > 0 ? scriptResult[3] : ""}
      </span>
    </p>
    <p>
    {selectedOption.length > 0 ? scriptResult[0] : "Price 1"} - {" "}
      <span style={{ fontWeight: "bold" }}>
        {" "}
        {scriptResult.length > 0 ? scriptResult[3] / scriptResult[2] : ""}
        {" "}
        {scriptResult.length > 0 ? scriptResult[1] : ""}
      </span>
    </p>
    <p>
    {selectedOption.length > 0 ? scriptResult[1] : "Price 1"} - {" "}
      <span style={{ fontWeight: "bold" }}>
        {" "}
        {scriptResult.length > 0 ? scriptResult[2] / scriptResult[3] : ""}
        {" "}
        {scriptResult.length > 0 ? scriptResult[0] : ""}
      </span>
    </p>
    <ComboBox
      options={options}
      placeholder="choose country"
      defaultIndex={4}npm
      optionsListMaxHeight={300}
      style={{
        width: "350px",
        margin: "0 auto",
        marginTop: "50px"
      }}
      focusColor="#20C374"
      renderOptions={(option) => (
        <div className="comboBoxOption">{option}</div>
      )}
      onSelect={(option) => setSelectedOption(option)}

      onChange={(event) => console.log(event.target.value)}
      enableAutocomplete
    />
      <button onClick={() => view()}>Check</button>

  </div>
);
} 

export default App;