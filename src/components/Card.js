import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

function Card({ course }) {
  const [like, setLike] = useState(false);

  function clickHandler() {
    if (!like) {
      toast.success("Liked Successfully");
    } else {
      toast.warn("Liked Removed");
    }
    setLike(!like);
  }

  return (
    <div
      className="bg-bgDark w-[300px] text-white bg-opacity-80 overflow-hidden rounded-md"
    >
      <div className="relative">
        <img src={course.image.url} alt=""/>
        <div
          className="w-[40px] h-[40px] flex items-center justify-center bg-white rounded-full absolute -bottom-3 right-2"
        >
          <button onClick={clickHandler}>
            {like ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="font-semibold mb-2 text-lg leading-6">{course.title}</p>
        <p className="mt-2">{course.description.substring(0, 100)}...</p>
      </div>
    </div>
  );
}

export default Card; 