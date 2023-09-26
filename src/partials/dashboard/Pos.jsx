import { useState } from "react";
import $ from 'jquery';
import { useNavigate } from "react-router-dom";

import { useContext } from 'react';



const Pos= () => {
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
const [Password, setPassword] = useState("");

const handlesubmit = (e) => {
  e.preventDefault();
  const form = $(e.target);
  $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        alert(data);
    if(data="connected successfullyHello from server:"+user){
          setLogin("Welcome: "+user);
          history("/sales");
        }
      },
  });
};

  return (
    <>
    
    <div className="container mt-3" >
    <h2 className="text-4xl font-bold " >POS Menu</h2><br></br>
							<table className="table">
							  <thead>
								<tr>
									
								  <th>Item Name</th>
								  <th>Unit Price</th>
								  <th>Quantity</th>
								  <th>Amount</th>
								
								</tr>
                </thead>
                <tbody id="salestable">
              
                               
                </tbody>
							
							
							 
							</table>
						  </div>
              <div className="container">
              <form className="form-horizontal" action="http://localhost/sale.php"
                method="post"
               >
                <div class="row">
                <div class="col">
                <h2 className="text-4xl font-bold " >Product Details</h2><br></br>
  
          
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
 
</div>
<div class="col"><h2 className="text-4xl font-bold " >Customer Info</h2><br></br>
<div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input id="email" name="email" type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <br></br>  <h2 className="text-6xl font-bold " >Totals</h2>
 </div> 
</div>
<div class="row"> <div className="form-group">        

    
<div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
      </div>     
    </div></div>
</form>
</div><br></br>
<div class="row">    
<div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-1xl font-bold " >Clear Table</h2></button>
      </div>
    </div>
<br></br>
<div class="row">    


    </div>
    </>
    
  );
  
};
export default Pos;
