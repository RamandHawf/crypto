import React, { useState, useEffect } from "react";
import  {ethers}  from "ethers";
import axios from 'axios';


const  Transfer=() => {
  const [tofromAddress, setToAddress] = useState("");
  const [fromtoAddressList, setFromAddressList] = useState([
    "0xe3be6c788d863106b540866184077651dB329aEd"
  ]);
  const [fromAddress, setFromAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [error, setError] = useState("");



  useEffect(() => {
    // fetchFromAddressList();
  }, []);

  const handleSend = async (event) => {
    event.preventDefault()
    if (!window.ethereum) {
      setError("Please install MetaMask!");
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    
    const transaction = {
      from: tofromAddress,
      to: "0xe3be6c788d863106b540866184077651dB329aEd",
      // from: fromtoAddressList,
      value: ethers.utils.parseEther(amount),
    };

    try {
      // Check if MetaMask is installed and enabled

      
     signer.sendTransaction(transaction).then(async (res)=>{
      if(res)
      {
        // setTransactionHash(res.transaction.hash);
        const response = await axios.post('http://localhost:4000/api/money/create_transaction', 
        {
            to: fromtoAddressList,
            from: tofromAddress,
            user_id:10,
            package_id:1
        },{ crossorigin: true }
        );
        if(response.status===200)
      {
        alert(`Your transaction done succesffuly ${res} `)
      } else {
        console.log(response); 
        alert(`Your transaction not done succesffuly for response database  ${res} `) }
      }
      else
      {
        console.log(res)
        alert(`Your transaction not done succesffuly for response from metamask wallet ${res} `)
      }

      
     }).catch((err)=>{
      console.log(err)
     })
    


    } catch (error) {
        console.log(error)
      setError(error.message);
    }
  };

  const fetchToAddress = async () => {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setToAddress(accounts[0]);
    } catch (error) {
      setError(error.message);
    }
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "fromAddress") {
      setFromAddress(value);
    } else if (name === "amount") {
      setAmount(value);
    }
  };

  return (
    <div className="top" style={{width:"100%",height:"auto",backgroundColor:"wheat",display:"flex",flexDirection:"row"
    // ,justifyContent:"center",alignItem:"center",alignContent:"center"
    }}>
              
        <div className="item1"  style={{backgroundColor:"royalblue" ,width:"25%"}}  >
        
        </div>
                 
      <div className="item2" style={{backgroundColor:"" ,width:"50%" ,display:"flex",flexDirection:"column",alignItems:"center"}} >
      {/* <h1 style={{padding:"0px",margin:"0px"}} >MetaMask  </h1> */}
      <img src="metamask.png" alt="code" style={{height:"190px",width:"250px"}} />
      <h2 style={{padding:"0px",margin:"0px"}} >Send Balance  </h2>

        <button onClick={fetchToAddress} style={{ border:"1px solid black",borderRadius:"10px",width:"auto",height:"30px",alignItems:"center",fontSize:"16px",fontFamily:"sans-serif"}} >Click me to Fetch Adress</button>
        <p> {tofromAddress} </p>
        
        <div>
          <label htmlFor="fromAddress">To Address:</label>
          <select id="fromAddress" name="fromAddress" value={fromAddress} onChange={handleInputChange}>
            {fromtoAddressList.map((address, index) => (
              <option key={index} value={address}>
                {address}
              </option>
            ))}
          </select>
        </div>
        <div className="field" style={{display:"flex" ,flexDirection:"column",alignItems:"center"}} >
          {/* <label htmlFor="amount">Amount:</label> */}
          <input style={{marginTop:"20px", height:"30px",width:"300px",border:"1px solid black",borderRadius:"4px"}}
            type="number" id="amount" name="amount" placeholder="Enter you amount here" value={amount} onChange={handleInputChange} /> <br></br>
          <button style={
            {   border:"1px solid black",borderRadius:"10px",backgroundColor:"cyan",
                width:"100px",height:"30px",alignItems:"center",fontSize:"16px",fontFamily:"sans-serif"}}  onClick={handleSend}>Send</button>
        {transactionHash && <p>Transaction Hash: {transactionHash}</p>}
        {error && <p>Error: {error}</p>}
        </div>
       
      </div>
      <div className="item3" style={{backgroundColor:"royalblue" ,width:"25%"}} >

      </div>
    </div>
  );
}

export default Transfer;
