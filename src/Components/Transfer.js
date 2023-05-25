import React, { useEffect, useState } from 'react';
import  {ethers}  from "ethers";
import axios from 'axios';



const  Transfer=() => {
  // const [transactions, setTransactions] = useState([]);

  const [tofromAddress, setToAddress] = useState("");
  const [fromtoAddressList, setFromAddressList] = useState([
    "0xe3be6c788d863106b540866184077651dB329aEd"
  ]);
  const [fromAddress, setFromAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionHash, setTransactionHash] = useState("");
  const [error, setError] = useState("");


  


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
        console.log(res)
        // setTransactionHash(res.transaction.hash);
         axios.post('http://15.152.206.151/api/money/create_transaction', 
        {
            transactiondetail : JSON.stringify(res),
            transactionhash : res.hash,
            to: fromtoAddressList[0],
            from: tofromAddress,
            userid:10,
            packageid:1
        }
        ).then((res)=>{
          if(res)
      {
        alert(`Your transaction done succesffuly ${res} `)
      }
        }).catch((err)=>{
          // console.log(err)
          // console.error(err.message);
          // console.error(err.response.data);
          alert(`Your transaction does not stored in database succesffuly ${err} `)
        })
        
      }


      
     }).catch((err)=>{
      console.log(err)
      alert(`Your transaction not done succesffuly for response from metamask wallet ${err} `)

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
