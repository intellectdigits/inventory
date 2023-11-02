import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import $, { parseJSON } from 'jquery';
import * as jqueryExports from "jquery";
import { useContext } from 'react';
import { MyContext } from '../../src/MyContext';
import pics from '../images/user-36-09.jpg';
window.$ = $;
function Customer() {
 // const navigate = useNavigate();
const[stocks,setStocks]=useState([]);
const[loading,setLoading]=useState(false);
const history = useNavigate();
const [transaction_Id, setTransaction_id] = useState("");
function fetchstock(){

    $.ajax({
      type: "POST",
      url: "http://localhost/stocks.php",
      data:"",
      success(data) {
      
        const arrs=JSON.stringify(data);
        const arr=JSON.parse(arrs);
        setStocks(arr);
     
                        
      },
  });
  }
  useEffect(() => {
    localStorage.setItem("current", "customer")
    setTransaction_id(Math.floor(Math.random() * 100000000));
    if(login==""){history("/logins");
   
  }
    fetchstock();
   
    
  },[]);
  window.$=$;
  const [item, setItem] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [clientname, setClient] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [stockinfo, setStock] = useState({});
  const [total, setTotal] = useState(0);
  var t=0;

const { login, setLogin } = useContext(MyContext);
var i=2;

const addrow=()=>{
  $("tbody").append(`<tr style="background-color:white;"><td id="sno" class="rows" hidden>${i}</td>
  <td class="rows" ><input type="text" id="item${i}"  placeholder="Enter Item Name" name="item"><div class="tip" id="tip${i}"></div></td>
  <td class="rows" ><input class="row" type="text" id="price${i}"  placeholder="unit Price" name="selling_price"></td>
  <td class="rows" ><input " type="text" id="qty${i}"   placeholder="Enter Quantity" name="qty"></td>
            
            <td class="rows" ><input type="number" class="row" id="amount${i}"  placeholder="Amount" disabled></td>
            <td class="rows" ><button class="row" type="button"  class="btn-primary" name="submit" id="remove"><img  height="5px" src="../src/images/del.jpg"/></button></td>
            
          </tr>`);
          i=i+1;
}
$(document).on("click", "#remove", function () {$(this).closest('tr').find('.rows').remove()});

$(document).on("keyup", ".rows", function () {$("#sref").text($(this).closest('tr').find('#sno').text());})
$(document).on("keyup", $("#item"+$("#sref").text()), function () {

  if($("#qty1").val()!==''){
    
var p=parseInt($("#qty"+$("#sref").text()).val());
var q=parseInt($("#price"+$("#sref").text()).val());
var t=p*q;
$("#amount"+$("#sref").text()).val(t);

$.ajax({
  type: "POST",
  url: "",
  data:JSON.stringify({ 'item': $("#item"+$("#sref").text()).val()}),
  success: function (response) {
var tip=JSON.parse(response)
  setStock(tip);
$("#tip"+$("#sref").text()).empty();
$(this).closest('tr').find('#tip').append("<div>dfdfdfd</div>");                  
$("#tip"+$("#sref").text()).append(`<div id="tipresult">${tip.item}</div>`)

   


  }
});

  }
  

  });
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
    if(!isNaN(salesum)){
    $("#total").text("Total:"+salesum)
  }
  
    });
    const entersale=()=>{

  for(var a=2;a<i;a++){
    if($("#item"+a).val()!=null){
                      $.ajax({
                          type: "POST",
                          url: "https://stockapi-8hb4.onrender.com/api/pos",
                          data: JSON.stringify({
                'item':$("#item"+a).val(),
                'amount':$("#amount"+a).val(),
                              'qty':$("#qty"+a).val(),
                              'client':$("#client").val(),
                              'username':login,
							'phone':$("#phone").val(),
              
                          }),
                          success: function (response) {
                            $("tbody").empty();
                            alert("hghg")
                      
                          }
                      });
                     
          }
        }
      }
      function gettotal(){
			
				var total =0;
               
                  $.ajax({
                      type: "POST",
                      url: "http://localhost/Voice_sales/summary.php",
                      data:{ 'transid': $("#transid").val()},
                      success: function (response) {
					
                          $.each(response, function (key, value) { 
                            total = total+parseInt(value['total']);
						
							$("#client").text(value['client']);$("#date").text(value['trans_date']); $("#total").text(total);
                          });
						   
						  
                      }
                  });
              
		}	 
  const handlesubmit = (e) => {

    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "https://stockapi-8hb4.onrender.com/addCustomer",
      data:JSON.stringify({ 'name': $("#client"+$("#sref").text()).val(),
      'phone': $("#phone"+$("#sref").text()).val(),'email': $("#email"+$("#sref").text()).val(),'country': $("#country"+$("#sref").text()).val()}),
      success: function (response) {
        alert("")
        $("tbody").empty();
        $.each(response, function (key, value) { 
     
        
          $("tbody").append(`<tr><td>${value["name"]}</td><td>${value["phone"]}</td>
          <td>${value["email"]}</td><td>${value["country"]}</td><td> <button type="submit"  class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Remove Customer</h2></button></td></tr>`);
                });
                $("#client").val(""); $("#phone").val("") ; $("#email").val("") ;  $("#country").val("") ;             
    
      }
    });
  };
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Customers</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
        <table className="table" border="1">
        <div id="sref"></div>
							  <thead>
								<tr>
									
								  <th>Customer Name</th>
								  <th>Phone</th>
								  <th>Email</th>
								  <th>Country</th>
                  <th>Remove</th>
								</tr>
                </thead>
                <tbody id="salestable">
              
                               
                </tbody>
							
							
							 
							</table>
          <form className="form-horizontal" 
                onSubmit={(event) => handlesubmit(event)}
               >
 
<div className="form-group">        
  <br></br>   
  <h2 className="font-semibold text-slate-800 dark:text-slate-100">Add New Customers</h2><br />
    </div>
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Customer Name</label>
        <div class="mt-2">
          <input id="client"type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Phone</label>
        <div class="mt-2">
          <input id="phone" type="text"  required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <input name="email" id="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
        <div class="mt-2">
          <input name="country" id="country"  type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Profile picture</label>
        <div class="mt-2">
          <input type="file" name="mypic" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <center> <button type="submit" onClick={entersale} class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Save</h2></button></center>
   
</form>
        </div>
      </div>
      <div class="row">    
<div>

          
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

export default Customer;
