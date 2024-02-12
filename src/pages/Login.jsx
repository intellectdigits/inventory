import { useState } from "react";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

import { useContext } from 'react';
import { MyContext } from '../MyContext';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(null);
  const resetTheme = () => {
    setTheme(null);
  };
  const history = useNavigate();
  const themeClass = theme ? theme.toLowerCase() : "secondary";
  const myArray = ['apple', 'banana', 'orange'];
  const myArrays = ['apple', 'banana', 'orange'];
const myList = myArray.map((item) => <p>{item}</p>);
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
const x = 56;

const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}
function Garage() {
  const carInfo = "Mustang" ;
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={ carInfo } />
    </>
  );
}
function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
const [user, setUser] = useState("");
const[validate,setValidate]=useState("")
const [Password, setPassword] = useState("");
const { login, setLogin } = useContext(MyContext);
const handlesubmit = (e) => {
  e.preventDefault();
  const form = $(e.target);
  var SendInfo={"username":user,"password":Password}
  $.ajax({
    type: 'POST',
    url: 'https://stockapi-8hb4.onrender.com/login',
    data: JSON.stringify(SendInfo),
    contentType: "application/json; charset=utf-8",
    traditional: true,
      success(data) {
   const username=JSON.parse(data);
  
    if(username.username==user){
     
          setLogin(username.username);
          history("/"+localStorage.getItem("current"));
        }else{
          alert("wrong Credentials")
         
        }
      },
  });
  setValidate("wrong username or Password");  
};

  return (
    <>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your accountd</h2>
    <h1 style={{color:"red"}}>{validate}</h1>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6"  onSubmit={handlesubmit} >
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input id="text" name="user" onChange={(e)=>setUser(e.target.value)} type="text" value="victor"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" name="password" value="nnamani131" type="password" onChange={(e)=>setPassword(e.target.value)} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>

   
  </div>
</div>

    </>
    
  );
  
};
export default ThemeSwitcher;
