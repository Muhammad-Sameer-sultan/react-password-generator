import React,{useState} from "react";
import {numbers,upperCaseLetters,lowerCaseLetters,specialCharacters} from './Character'

import './App.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [addUpper, setaddUpper] = useState(false)
  const [addLower, setAddLower] = useState(false)
  const [includeNumber, setincludeNumber] = useState(false)
  const [includeCharacter, setincludeCharacter] = useState(false)
  const [passwordLength, setpasswordLength] = useState(16)
  const [password, setpassword] = useState("")

const  btnGeneratePasswordlCick=()=>{
 
  let passwordCharacterSet="";
  if (!addUpper && !addLower && !includeNumber && !includeCharacter) {
    // console.log('empty');
    toast.error("Please Check any one of the field!"
    // , {
      // position: "top-center",
      // autoClose: 5000,
      // hideProgressBar: false,
      // closeOnClick: true,
      // pauseOnHover: true,
      // draggable: true,
      // progress: undefined,
    // }
    );
  }
  else{
    if(addUpper){
      passwordCharacterSet+= upperCaseLetters;
    }
    if(addLower){
      passwordCharacterSet+= lowerCaseLetters;
    }
    if(includeNumber){
      passwordCharacterSet+= numbers;
    }
    if(includeCharacter){
      passwordCharacterSet+= specialCharacters;
      
    }

    let generatePassword="";
    for (let i = 0; i < passwordLength; i++) {
      generatePassword+= passwordCharacterSet.charAt(Math.random()*passwordCharacterSet.length)
      
    }

    setpassword(generatePassword);
    toast("Password is generated Sucessfully!")
  }
}
const copyPassword=()=>{
  if(password!==""){

    navigator.clipboard.writeText(password);
    toast.info('Password Copyed !')
  }
  
  }
  return (
    <div className="main-container">
      <div className="inner">
      <div className="header">
          <h2>Password Generator</h2>
          <div className="password-box">
            <input type="text" onChange={(e)=>{setpassword(e.target.value)}} value={password}/>
            <button onClick={copyPassword}>
              <i className="fa-regular fa-clipboard"></i>
            </button>
          </div>
        </div>
        <div className="body">
       
          <div className="add-func">
            <div className="range">
            <p>Password Length</p>
            <input type="range" max={27} min={7} value={passwordLength} onChange={(e)=>{setpasswordLength(e.target.value);console.log(passwordLength)}} />
            </div>
            <input type="number" value={passwordLength} className="passwordLength" onChange={(e)=>{setpasswordLength(e.target.value)}} />
          </div>
          <div className="add-func">
            <p>Add Uppercase Letters</p>
            <input type="checkbox" onChange={(e)=>{setaddUpper(e.target.checked)}} />
          </div>
          <div className="add-func">
            <p>Add Lowercase Letters</p>
            <input type="checkbox" onChange={(e)=>{setAddLower(e.target.checked)}} />
          </div>
          <div className="add-func">
            <p>Includes Numbers</p>
            <input type="checkbox" onChange={(e)=>{setincludeNumber(e.target.checked)}} />
          </div>
          <div className="add-func">
            <p>Includes Special Characters</p>
            <input type="checkbox"  onChange={(e)=>{setincludeCharacter(e.target.checked)}}/>
          </div>
          
        </div>
        <button className="main-btn" onClick={btnGeneratePasswordlCick}>
          Generate Password
        </button>
      </div>
      {/* <Toast/> */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // rtl={true}
        // pauseOnFocusLoss
        // pauseOnHover
        // closeOnClick
        // draggable
        


        />
        
    </div>
  );
};
export default App ;
