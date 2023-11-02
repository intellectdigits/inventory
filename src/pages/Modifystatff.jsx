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
import $ from 'jquery';

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
function Modifystaff() {
    const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [wage, setWage] = useState("");
  const [paydate, payDate] = useState("");
  const [stock, setStock] = useState("uncheck");
  const [sales, setSales] = useState("checked");
  const [staff, setStaff] = useState("uncheck");
  const [reports, setReports] = useState("uncheck");
  const[items,setItems]=useState([]);
const[loadings,setLoadings]=useState(false);

const history = useNavigate();
function fetchstock(){
  

    $.ajax({
      type: "GET",
      url: "https://stockapi-8hb4.onrender.com/users/user/"+id.substring(1),
      success(data) {
        $.each(data, function (key, value) { 
    $("#user").val(value["username"]);$("#pass").val(value["password"]);$("#wage").val(value["wage"]);$("#due").val(value["payment_date"]);
    $("#stocks").empty(); $("#stocks").append(`Inventory:<input id="stocks" name="stocks" type="checkbox" ${value["inventory"]}/> `);
    $("#reports").empty(); $("#reports").append(`Reports<input  name="reports" type="checkbox" ${value["report"]}/> `);
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
    type: 'DELETE',
    url: "https://stockapi-8hb4.onrender.com/users/user/"+id.substring(1),
    contentType: "application/json; charset=utf-8",
    traditional: true,
       success(data) {
      
        history("/admin")
    },
       error: function(xhr, textStatus, errorThrown){
         history("/")
         console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
       }
   });
 };
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
                onSubmit={(event) => handlesubmit(event)}
               >
                <div class="row">
                <div class="col">
                <h2 className="text-2xl font-bold " >User</h2><br></br>
  
                <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
        <div class="mt-2">
                </div>
                  </div>    
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        
        <div class="mt-2">
          <input id="user" name="user" value={user} onChange={(e)=>setUser(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div hidden>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        
        <div class="mt-2">
          <input  name="id" value={id}  type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="mt-2">
          <input id="pass" name="password" autoComplete='false' value={pass} onChange={(e)=>setPass(e.target.value)} type="password" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Wage</label>
        <div class="mt-2">
          <input id="wage" name="wage" value={wage} onChange={(e)=>setWage(e.target.value)} type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Salary Due Date</label>
        <div class="mt-2">
          <input id="due" name="date" value={paydate} onChange={(e)=>payDate(e.target.value)} type="number" autocomplete="email" placeholder='dd-mm-yyyy' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>   

      <div className='row'>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"><h2 className="text-2xl font-bold " >Priviledges</h2></label>
       
      <div className='col' id="stocks">  Inventory Menu: <input  name="stocks" type="checkbox"  /></div>    <div className='col' id="sales">  Sales Menu: <input  name="sales" type="checkbox"  /></div> 
      <div className='col' id="reports">  Reports: <input  name="reports" type="checkbox"  /></div>  Add/Modify Staff  <input id="staffs" type="checkbox" name="staffs" />    
      </div>
      
      <div>
        <br></br>
        <button type="submit" onClick={()=>{$("tbody").empty(); setTotal(0);}} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Modify User</h2></button>
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
             </div><button type="submit" class="flex  justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Delete</h2></button>

      </div>
</form>
           </div>

          </div>
        </main>

       

      </div>
    </div>
  );
}

export default Modifystaff;
