import React,{useState,useEffect} from "react";
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import Spinner from './components/Spinner';
import {toast} from 'react-toastify';
import {apiUrl,filterData} from './data.js';
const App = () => {

  //useState functions
const [courses,setCourses]=useState(null);
const [loading,setLoading]=useState(true);
const [category,setCategory]=useState(filterData[0].title);

//Function to make the API call
const fetchdata=async function () {
  setLoading(true);
  try {
    let res=await fetch(apiUrl);
    let data=await res.json();
    setCourses(data.data);
  } catch (error) {
    toast.error("Something went wrong!");
  }
  setLoading(false);
}

//calling the Use Effect Functions
useEffect(()=>{
  fetchdata();
},[]);

//UI Components
return (
  <div className="min-h-screen flex flex-col bg-bgDark2">
      <Navbar></Navbar>
      <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      { loading?<Spinner/>:<Cards courses={courses} category={category}/>}
      </div>
    </div>
  );
};

export default App;
