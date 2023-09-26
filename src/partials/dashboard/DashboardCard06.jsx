import React from 'react';
import DoughnutChart from '../../charts/DoughnutChart';
import $ from 'jquery';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as jqueryExports from "jquery";
// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06() {
  window.$ = $;
  const chartData = {
    labels: ['United States', 'Italy', 'Other'],
    datasets: [
      {
        label: 'Top Countries',
        data: [
          35, 30, 35,
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
        ],
        borderWidth: 0,
      },
    ],
  };
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
const handlesubmit = (e) => {
   
 //  e.preventDefault();
   const form = $(e.target);
   $.ajax({
       type: "POST",
       url: form.attr("action"),
       data: form.serialize(),
       success(data) {
     
     
        },
       error: function(xhr, textStatus, errorThrown){
         console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
       }
   });
 };
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <form className="form-horizontal" action="http://localhost/users.php"
                method="post"
                onSubmit={(event) => handlesubmit(event)}
               >
                <div class="row">
                <div class="col">
                <h2 className="text-2xl font-bold " >Add User</h2><br></br>
  
                <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"></label>
        <div class="mt-2">
                </div>
                  </div>    
    <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">UserName</label>
        
        <div class="mt-2">
          <input name="user" value={user} onChange={(e)=>setUser(e.target.value)} type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
        <div class="mt-2">
          <input id="email" name="password" autoComplete='false' value={pass} onChange={(e)=>setPass(e.target.value)} type="password" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Wage</label>
        <div class="mt-2">
          <input name="wage" value={wage} onChange={(e)=>setWage(e.target.value)} type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Salary Due Date</label>
        <div class="mt-2">
          <input name="date" value={paydate} onChange={(e)=>payDate(e.target.value)} type="number" autocomplete="email" placeholder='dd-mm-yyyy' required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>   

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"><h2 className="text-2xl font-bold " >Priviledges</h2></label>
        <div class="mt-2">
        Inventory Menu: <input name="stocks" type="checkbox"  />    POS Menu: <input type="checkbox" value={sales} onClick={(e)=>setSales("checked")} name="sal" checked /> Sales: <input type="checkbox" name="sales" /> View Reports <input type="checkbox" name="reports" />  Add/Modify Staff  <input type="checkbox" name="staffs" />     </div>
      </div>
      
      <div>
        <br></br>
        <button type="submit" onClick={()=>{$("tbody").empty(); setTotal(0);}} class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Add User</h2></button>
      </div>
</div>

   </div>
</form>
    </div>
  );
}

export default DashboardCard06;
