import React from 'react';
import {FiTarget, FiMenu} from "react-icons/fi";
import {FaUserCircle} from "react-icons/fa";


const NavigationPanel=() => {
      return (
            <div className='flex h-14 mt-4 justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-900 w-96'>
                  <div className="flex w-28 items-center justify-between pt-2">
                        <FiMenu style={{height: "30px", width: "20px", color: "white"}} />
                        <p className='flex w-16 items-center h-full justify-between'>
                              <FiTarget style={{height: "30px", marginRight: "2px", width: "20px", color: "white"}} />
                              <p className='text-white flex  font-medium'>TIOBU</p>
                        </p>
                  </div>
                  <div className="flex h-full items-center">
                        <p className="flex w-10 h-10 items-center justify-center rounded-xl text-white">
                              <FaUserCircle style={{backgroundColor: "pink", borderRadius: "50%", width: "25px", height: "25px"}} />
                        </p>
                  </div>

            </div>
      )
}

export default NavigationPanel