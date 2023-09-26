import React from 'react';
import {useState} from "react";
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import * as jqueryExports from "jquery";
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import { Outlet, Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
window.$ = $;
function DashboardCard07() {

const[stocks,setStocks]=useState([]);
const[loading,setLoading]=useState(false);
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//Modal.setAppElement('#yourAppElement');
let subtitle;

const [modalIsOpen, setIsOpen] = React.useState(false);

function openModal() {
  setIsOpen(true);
}

function afterOpenModal() {
  // references are now sync'd and can be accessed.
  subtitle.style.color = '#f00';
}

function closeModal() {
  setIsOpen(false);
}
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

  function fetchitem(){

   
   
  }
  useEffect(() => {
    fetchstock();
  },[]);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [wage, setWage] = useState("");
  const [paydate, payDate] = useState("");
  const [stock, setStock] = useState("uncheck");
  const [sales, setSales] = useState("checked");
  const [staff, setStaff] = useState("uncheck");
  const [reports, setReports] = useState("uncheck");
  const[items,setItems]=useState([]);
    var link="stock/:";
const[loadings,setLoadings]=useState(false);
const history = useNavigate();
const handlesubmit = (e) => {
   
   e.preventDefault();
   const form = $(e.target);
   $.ajax({
       type: "POST",
       url: form.attr("action"),
       data: form.serialize(),
       success(data) {
        fetchstock();
        closeModal();
     
        },
       error: function(xhr, textStatus, errorThrown){
         console.log('STATUS: '+textStatus+'\nERROR THROWN: '+errorThrown);
       }
   });
 };
 const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="col-span-full xl:col-span-8 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
        
        
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form className="form-horizontal" action="http://localhost/insertstock.php"
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
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Item name</label>
        
        <div class="mt-2">
          <input name="item" id="itemname"   type="text" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">cost price</label>
        <div class="mt-2">
          <input id="cost" name="cost" autoComplete='false'   type="password" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Selling price</label>
        <div class="mt-2">
          <input name="sell"   type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Expiring date</label>
        <div class="mt-2">
        <DatePicker name="expiring" selected={startDate} onChange={(date) => setStartDate(date)} />
       
                </div>
      </div>   

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900"><h2 className="text-2xl font-bold " >Priviledges</h2></label>
        <div class="mt-2">
        <input name="qty"   type="number" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>  </div>
      </div>
      
      <div>
        <br></br>
        <button type="submit"  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"><h2 className="text-2xl font-bold " >Add Stock</h2></button>
      </div>
</div>

   </div>
</form>
      </Modal>
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Stocks</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Stock Description</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Unit Price</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Quantity In Stock</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Expiring Date</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Expiring Date</div>
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
                  <div className="text-center">{row["selling_price"]}</div>
                </td>
                <td className="p-2" >
                  <div className="text-center text-emerald-500" style={{
                            color: row["qty"]>5 ? "rgb(14,203,129)" : "red",
                          }}>{row["qty"]}</div>
                </td>
               
                <td className="p-2">
                  <div className="text-center text-sky-500">{row["expiring_date"]}</div>
                </td>
                <td className="p-2">
                
                  <div className="text-center text-sky-500"><button  class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" ><Link to={"stock/:"+row["id"]}>Modify</Link></button><br></br>
                  </div>
                </td>
              </tr>)}
              {/* Row */}
            </tbody>
          </table>
        </div>
      </div>
     <center> <button class="flex  justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={openModal}>+ New Stock</button></center><br></br>
    </div>
  );
}

export default DashboardCard07;
