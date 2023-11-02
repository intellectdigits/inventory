import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import * as jqueryExports from "jquery";
import { useContext } from 'react';
import { MyContext } from '../../MyContext';
import { Outlet, Link } from "react-router-dom";
window.$ = $;
function DailySales() {
  const history = useNavigate();

  useEffect(() => {

    
    fetchstock();
    localStorage.setItem("current", "SalesReport")
    fetchstock();
    if(login==""){history("/logins");}
    
  },[]);
  window.$=$;
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [clientname, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [total, setTotal] = useState(0);
  var t=0;

const { login, setLogin } = useContext(MyContext);
var i=2;


const [sum, SetSum] = useState(0);
const[stocks,setStocks]=useState([]);
function fetchstock(){

  $.ajax({
    type: "GET",
    url: "https://stockapi-8hb4.onrender.com/api/sales",
    data:"",
    success(data) {
  
      const arrs=JSON.stringify(data);
      const arr=JSON.parse(arrs);
      setStocks(arr);
      var p=0;
     for(var i=0;i<arr.length;i++){
      if(arr[i].amount!==""){
      p=p+parseInt(arr[i].amount);
SetSum(p)
     }
    }                
    },
   
});
}
const filterbyuser=()=>{
 
  $.ajax({
    type: "POST",
    url: "https://stockapi-8hb4.onrender.com/filtersales",
    data:JSON.stringify({username:$("#client").val()}),
    success(data) {
     
      
      const arr=JSON.parse(data);
      setStocks(arr);
      var p=0;
     for(var i=0;i<arr.length;i++){
      if(arr[i].amount!==""){
      p=p+parseInt(arr[i].amount);
SetSum(p)
     }
    }                
    },
   
});
}
const filterbycustomer=()=>{
 
  $.ajax({
    type: "POST",
    url: "https://stockapi-8hb4.onrender.com/filterBycustomer",
    data:JSON.stringify({client:$("#customer").val()}),
    success(data) {
     
      
      const arr=JSON.parse(data);
      setStocks(arr);
      var p=0;
     for(var i=0;i<arr.length;i++){
      if(arr[i].amount!==""){
      p=p+parseInt(arr[i].amount);
SetSum(p)
     }
    }                
    },
   
});
}
const filterByproduct=()=>{
 
  $.ajax({
    type: "POST",
    url: "https://stockapi-8hb4.onrender.com/filterByproduct",
    data:JSON.stringify({item:$("#product").val()}),
    success(data) {
      alert(data)
      
      const arr=JSON.parse(data);
      setStocks(arr);
      var p=0;
     for(var i=0;i<arr.length;i++){
      if(arr[i].amount!==""){
      p=p+parseInt(arr[i].amount);
SetSum(p)
     }
    }                
    },
   
});
}
  $(document).on("click", ".tip", function () { 
    
    $("#price"+$("#sref").text()).val(stockinfo.selling_price);
				
    $("#item"+$("#sref").text()).val($(this).closest('tr').find('.tip').text())
   // $(".tip").empty();
   
  });
  $(document).on("change", $("#client"+$("#sref").text()), function () {
    var salesum=0;
    
      


  
    for(var a=1;a<i;a++){
      if($("#item"+a).val()!=null && $("#item"+a).val()!=""){
 
    salesum=salesum+parseInt($("#amount"+a).val())
      }
    
    }
   
  
    });
  
      
  const handlesubmit = (e) => {

   e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
        history("/sales");
      var amount=price*qty; 
   t=total+amount;
  setTotal(t);
  
   $(".table").append(`<tr><td>${item}</td><td>${qty}</td><td>${price}</td><td>${amount}</td><td><a href="/modifystaff/"/><img width="10%" src="../src/images/delete.jpg"/></a><br>

   <a href=""><img width="10%"  src="../src/images/del.jpg"/></a></td></tr>`)  
        },
        error: function(xhr, textStatus, errorThrown){
          console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
        }
    });
  };
  
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Daily Sales Report</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
        <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Stock Descriptions</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Amount</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantity </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">User</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Customer</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
             {/* Row */}
            {stocks.map((row)=>
           
           <tr>
         
                <td className="p-2">
                  <div className="flex items-center">
                  
                    <div id="itemid" className="text-slate-800 dark:text-slate-100">{row["item"]}</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">{row["amount"]}</div>
                </td>
                <td className="p-2" >
                  <div className="text-center text-emerald-500" style={{
                            color: row["qty"]>5 ? "rgb(14,203,129)" : "red",
                          }}>{row["qty"]}</div>
                </td>
               
                <td className="p-2">
                  <div className="text-center text-sky-500">{row["username"]}</div>
                </td>
                <td className="p-2">
                
                  <div className="text-center text-sky-500">{row["client"]}
                  
                  </div>
                </td>
              </tr>)}
              {/* Row */}
            </tbody>
          </table>
      
<div className="form-group">       <form className="form-horizontal" action="http://localhost/sale.php"
                method="post"
                onSubmit={(event) => handlesubmit(event)}
               > 
  <br></br>   
 
    <td>
    <div>
        <h1  class="flex  justify-center py-1.5 text-sm font-semibold">Username</h1>
        <div class="mt-2">
          <input id="client"type="text" placeholder='enter username'  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/><br />
          <div>
 
  
        <center><button type="button" onClick={filterbyuser} class="flex  justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Filter By staff</button></center>
      </div>  
        </div>
      </div></td>
     <td> <div>
     <h1  class="flex  justify-center py-1.5 text-sm font-semibold">Customer</h1>
        <div class="mt-2">
          <input id="customer" type="text" placeholder='enter customer name' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/><br></br>
          <div>
 
  
 <center><button type="button" onClick={filterbycustomer} class="flex  justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Filter By Customer</button></center>
</div>  
        </div>
      </div></td>
      <td><div>
      <h1  class="flex  justify-center py-1.5 text-sm font-semibold">Product</h1>
        <div class="mt-2">
          <input name="email" id='product' type="email" placeholder='enter product name' autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/><br></br>
        </div>
        <div>
 
  
        <center><button type="button" onClick={filterByproduct} class="flex  justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Filter By product</button></center>
      </div>  
      </div></td>
      </form>  
    </div>
        </div>
      </div>
      <div class="row">    
<div>
<h2 className="text-3xl font-bold "  id="total">Totals:{sum}</h2>
           
      </div>
    </div>
    <br></br>
<div class="row">   
 
<center>

  </center>    
    </div>
    </div>
    
    
  );
}

export default DailySales;
