import React, { useEffect, useState } from "react";
import "./styles/App.css";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  };

  const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">
      <button className="cta-button connect-wallet-button">
        Connect Wallet
      </button>
    </div>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return <div className="App">{renderNotConnectedContainer()}</div>;
};

export default App;
