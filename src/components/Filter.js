import React from "react";
function Filter({filterData,category,setCategory}){

    function filterHandler(title){
        setCategory(title);
    }
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {filterData.map((data)=>{
                return(<button onClick={()=>{filterHandler(data.title)}} key={data.id} className={`text-white text-lg px-2 py-1 rounded-md font-medium bg-black 
                border-2 transition-all duration-200 ${category===data.title?
                 "bg-opacity-60 border-white":
                 "bg-opacity-40 border-transparent"}
                 `}>{data.title}</button>)
            })}
        </div>
    );
}

export default Filter;