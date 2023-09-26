import $ from 'jquery';
import * as jqueryExports from "jquery";
import React from "react";

import { useState } from "react";

const Sales = () => {
  window.$=$;
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [clientname, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(0);
  var t=0;
  const handlesubmit = (e) => {
   
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
          alert("");
      var amount=price*qty; 
   t=total+amount;
  setTotal(t);
  
   $(".table").append(`<tr><td>${item}</td><td>${qty}</td><td>${price}</td><td>${amount}</td></tr>`)  
        },
        error: function(xhr, textStatus, errorThrown){
          console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
        }
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
                onSubmit={(event) => handlesubmit(event)}
               >
                <div class="row">
                <div class="col">
                <h2 className="text-4xl font-bold " >Product Details</h2><br></br>
  
          
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Stock Name</label>
        <div class="mt-2">
          <input name="item" value={item} onChange={(e)=>setItem(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
        <div class="mt-2">
          <input id="email" name="qty" autoComplete='false' value={qty} onChange={(e)=>setQty(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Unit Price</label>
        <div class="mt-2">
          <input id="email" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
 
</div>
<div class="col"><h2 className="text-4xl font-bold " >Customer Info</h2><br></br>
<div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Customer Name</label>
        <div class="mt-2">
          <input id="email" name="clientname" value={clientname} onChange={(e)=>setClient(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
        <div class="mt-2">
          <input id="email" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <input id="email"name="email" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
   
 </div> 
</div>
<div class="row"> <div className="form-group">        
  <br></br>   
<div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product</button>
      </div>     
    </div></div>
</form>
</div><br></br>
<div class="row">    
<div>
        <button type="submit" onClick={()=>{$("tbody").empty(); setTotal(0);}} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Clear Table</h2></button>
      </div>
    </div>
<br></br>
<div class="row">    
<center>
<h2 className="text-6xl font-bold " >Total:{total}</h2>
  </center>    
    </div>
    </>
    
  );
  
};
export default Sales;
