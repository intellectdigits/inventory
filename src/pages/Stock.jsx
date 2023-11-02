import React, { useState } from 'react';
import {useEffect} from "react";
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../components/DropdownFilter';
import Datepicker from '../components/Datepicker';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard03 from '../partials/dashboard/DashboardCard03';
import DashboardCard04 from '../partials/dashboard/DashboardCard04';
import DashboardCard05 from '../partials/dashboard/DashboardCard05';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';
import DashboardCard08 from '../partials/dashboard/DashboardCard08';
import DashboardCard09 from '../partials/dashboard/DashboardCard09';
import DashboardCard10 from '../partials/dashboard/DashboardCard10';
import DashboardCard11 from '../partials/dashboard/DashboardCard11';
import DashboardCard12 from '../partials/dashboard/DashboardCard12';
import DashboardCard13 from '../partials/dashboard/DashboardCard13';
import Banner from '../partials/Banner';
import Transition from '../utils/Transition';
import {useRef } from "react";
import $ from 'jquery';
import DatePicker from "react-datepicker";
import { Outlet, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Stock() {
    const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const item= useRef("");
  const cost= useRef("");
  const sell= useRef("");
  const qty = useRef("");
  const stock= useRef("uncheck");
  const sales = useRef("checked");
  const staff= useRef("uncheck");
  const reports = useRef("uncheck");
  const[items,setItems]=useState([]);
const[loadings,setLoadings]=useState(false);

const history = useNavigate();
function fetchstock(){


    $.ajax({
      type: "GET",
      url: "https://stockapi-8hb4.onrender.com/api/stocks/"+id.substring(1),
      success(data) {
        alert("edsd")
        $.each(data, function (key, value) { 

    $("#item").val(value["item"]);$("#cost").val(value["cost_price"]);$("#sell").val(value["selling_price"]);$("#qty").val(value["qty"]);
    $("#expiring").val(value["expiring_date"]);

               });
  
      },
  });
  }
  useEffect(() => {
    fetchstock();
  },[]);
const handlesubmit = (e) => {
   
   e.preventDefault();
   
   $.ajax({
       type: "DELETE",
       url: "https://stockapi-8hb4.onrender.com/api/stocks/"+id.substring(1),
       success(data) {
     history("/")
     
        },
       error: function(xhr, textStatus, errorThrown){
         console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
       }
   });
 };
 
 const modifystock = (e) => {
  const SendInfo={item:item.current.value,selling_price:parseInt(sell.current.value),cost_price:parseInt(cost.current.value),qty:parseInt(qty.current.value),expiring_date:"22/11/2000",alert_date:"22/11/2000"}

  e.preventDefault();
 
  $.ajax({
   type: 'PUT',
   url: "https://stockapi-8hb4.onrender.com/api/stocks/"+id.substring(1),
   data: JSON.stringify(SendInfo),
   contentType: "application/json; charset=utf-8",
   traditional: true,
      success(data) {
        alert(item.current.value)
       history("/")
   },
      error: function(xhr, textStatus, errorThrown){
        history("/")
        console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
      }
  });
};
 const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
           

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Avatars    <DashboardAvatars />*/}
           

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
              
                {/* Datepicker built with flatpickr <Datepicker /> */}
               
                {/* Add view button */}
                            
              </div>

            </div>

            {/* Cards */}
           <div className='row'>
           <form className="form-horizontal" 
                onSubmit={(event) => modifystock(event)}
               >
                <div class="row">
                <div class="col">
                <h2 className="text-2xl font-bold " >Modify Stock</h2><br></br>
 
                <div>
               
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
       
        <div class="mt-2">
                </div>
                  </div>   
                  <center><div id="img">dsds</div></center> 
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Item Name</label>
        
        <div class="mt-2">
          <input id="item" name="item"  ref={item} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div hidden>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        
        <div class="mt-2">
          <input  id="id" value={id}  type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Cost Price</label>
        <div class="mt-2">
          <input id="cost" name="cost" autoComplete='false' ref={cost} type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Selling Pricer</label>
        <div class="mt-2">
          <input id="sell" name="sell" ref={sell} type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Quantity</label>
        <div class="mt-2">
          <input id="qty" name="qty" ref={qty} type="number" autocomplete="email" placeholder='dd-mm-yyyy' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>   

      <div className='row'>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"><h2 className="text-2xl font-bold " >Expiring Date</h2></label>
       
        <DatePicker id="expiring" name="expiring" selected={startDate} onChange={(date) => setStartDate(date)} />      </div>
      <br></br>
      <div class="flex  justify-center">
       
        <button type="submit" class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Save</h2></button>
<br></br>
         </div>
         
</div>

   </div>
</form>
<form  onSubmit={handlesubmit}>
<div hidden>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        
        <div class="mt-2">
          <input  name="id" value={id}  type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
        
        <div class="mt-2">
             </div><button type="submit" onClick={()=>{$("tbody").empty(); setTotal(0);}} class="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Delete</h2></button>

      </div>
</form>
      
           </div>

          </div>
        </main>

       

      </div>
    </div>
  );
}

export default Stock;
