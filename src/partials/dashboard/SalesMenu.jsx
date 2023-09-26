import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import * as jqueryExports from "jquery";
import { useContext } from 'react';
import { MyContext } from '../../../src/MyContext';

window.$ = $;
function SalesMenu() {
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
    setTransaction_id(Math.floor(Math.random() * 100000000));
    
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
  url: "http://localhost/searchtip.php",
  data:{ 'item': $("#item"+$("#sref").text()).val()},
  success: function (response) {

$("#tip"+$("#sref").text()).empty();
      $.each(response, function (key, value) { 

$(this).closest('tr').find('#tip').append("<div>dfdfdfd</div>");                  
$("#tip"+$("#sref").text()).append(`<div id="tipresult">${value['item']}</div>`)

      });


  }
});

  }
  

  });
  $(document).on("click", ".tip", function () { 
			
				
    $("#item"+$("#sref").text()).val($(this).closest('tr').find('.tip').text())
   // $(".tip").empty();
    $.ajax({
                  type: "POST",
                  url: "http://localhost/tipresult.php",
                  data:{ 'item': $(this).closest('tr').find('.tip').text()},
                  success: function (response) {
        $("#tip"+$("#sref").text()).empty();
                      $.each(response, function (key, value) { 

          $("#price"+$("#sref").text()).val(value['selling_price']);
        
                      });
           
          
                  }
              });
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
                          url: "http://localhost/sale.php",
                          data: {
                              'checking_add':true,
                'item':$("#item"+a).val(),
                'price':$("#amount"+a).val(),
                              'qty':$("#qty"+a).val(),
                              'clientname':$("#client").val(),
                              'transid':$("#transid").val(),
                              'user':login,
							'phone':$("#phone").val(),
							'email':$("#email").val(),
              
                          },
                          success: function (response) {
                            $("tbody").empty();
                           
                      
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
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">POS Menu</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
        <table className="table" border="1">
        <div id="sref"></div>
							  <thead>
								<tr>
									
								  <th>Item Name</th>
								  <th>Unit Price</th>
								  <th>Quantity</th>
								  <th>Amount</th>
                  <th>Remove Item</th>
								</tr>
                </thead>
                <tbody id="salestable">
              
                               
                </tbody>
							
							
							 
							</table>
          <form className="form-horizontal" action="http://localhost/sale.php"
                method="post"
                onSubmit={(event) => handlesubmit(event)}
               >
 
<div className="form-group">        
  <br></br>   
<div>
  <input id="transid" value={transaction_Id} hidden/>
  
        <center><button type="button" onClick={addrow} class="flex  justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Item</button></center>
      </div>     
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
          <input name="email"  type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
</form>
        </div>
      </div>
      <div class="row">    
<div>
<h2 className="text-3xl font-bold "  id="total">Total:{total}</h2>
           <center> <button type="button" onClick={entersale} class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Save</h2></button></center>
   
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

export default SalesMenu;
