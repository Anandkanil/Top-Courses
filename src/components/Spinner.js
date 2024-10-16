import React from 'react'
import "./Spinner.css";
export default function Spinner() {
    return (
        <div className='flex flex-col justify-center items-center space-y-7'>
            <div className="loader"></div>
            <p className='text-bgDark text-lg font-semibold'>Loading...</p>
        </div>
    )
}
