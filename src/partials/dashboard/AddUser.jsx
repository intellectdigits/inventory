import React from 'react';
import {useState} from "react";
import {useEffect} from "react";

import $ from 'jquery';
import * as jqueryExports from "jquery";
import DashboardCard06 from './DashboardCard06';
import Datepicker from './Datepicker';
import Datepicker2 from './Datepicker';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { MyContext } from '../../../src/MyContext';
function AddUser() {
  const history = useNavigate();
const[stocks,setStocks]=useState([]);
const[loading,setLoading]=useState(false);

  window.$=$;
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
const { login, setLogin } = useContext(MyContext);
function fetchstock(){

setLoading(true);
  $.ajax({
    type: "GET",
    url: "https://stockapi-8hb4.onrender.com/api/users",
    data:"",
    success(response) {
     
      $("tbody").empty();
      $.each(response, function (key, value) { 
     

$("tbody").append(`<tr><td>${value["username"]}</td><td>${value["password"]}</td><td>Inventory Menu: <input name="stocks" type="checkbox"${value["username"]}  /> </td>
<td><button  class="btn-primary"><a href="/modifystaff/:${value["id"]}"/>Modify</a></button><br>

</td></tr>`);
      });

    },
});
}
useEffect(() => {
  localStorage.setItem("current", "admin")
    fetchstock();
    if(login==""){history("/logins");}
},[]);

  var t=0;
  const handlesubmit = (e) => {
   
   // e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
        
      var amount=price*qty; 
   t=total+amount;
  setTotal(t);
  
         },
        error: function(xhr, textStatus, errorThrown){
          console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
        }
    });
  };
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Users Menu</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
        <table className="table">
							  <thead>
								<tr>
									
								  <th>User Name</th>
								  <th>Password</th>
								  <th>Priviledges</th>
                  <th>Actions</th>
								 
								
								</tr>
                </thead>
                <tbody id="salestable">
                                       
                </tbody>
							
							
							 
							</table>
          
        </div>
      </div>
      <div class="row">    

    </div>
    <br></br>
<div class="row">    
<center>

  </center>    
    </div>
    </div>
    
    
  );
}

export default AddUser;
