
import React from "react";
import Card from "./Card";
function Cards({ courses,category }) {
    // Using spread to avoid direct mutation
    const getCourses = () => {
      if(category==="All"){
        Object.values(courses).flat();
      return Object.values(courses).flat(); // Flattening the array to avoid the push and simplify the logic
      }else{
        return courses[category];
      }
        
    };
  
    return (
      <div className="flex flex-wrap justify-center gap-4 mb-4 ">
        {getCourses().map((course, index) => {
          return <Card key={course.id} course={course} />; // Ensure to return JSX here
        })}
      </div>
    );
  }
  

export default Cards;