import React from 'react';
import {IoIosArrowBack} from "react-icons/io";
import {MdVerified} from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCreator} from '../../context';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



const Popup=() => {

      const [donations, setDonations]=React.useState();
      const dispatch=useDispatch()
      const {currentCreator}=useSelector(state => state.creator)

      const options=[
            "CAD", "USD", "EUR", "INR", "AFN", "BSD", "BZD", "ARS"
      ];
      const handleChange=(e) => {
            setDonations({...donations, [e.target.name]: e.target.value})
      }
      return (
            <div id='popUp' className='hidden flex-col fixed bg-white top-0  justify-center items-center w-96 border rounded-md h-screen'>
                  <div className='w-full h-full flex flex-col'>
                        <div className="flex w-full border-b-2 border-gray-300 h-16">
                              <div onClick={() => {
                                    document.getElementById('popUp').classList.toggle('hidden');
                                    dispatch(setCurrentCreator(null))
                              }} className="flex pl-4 h-full items-center"><IoIosArrowBack style={{height: "20px", width: "20px"}} /></div>
                              <div className="flex h-14 justify-center items-center w-14 rounded-full">
                                    <img className='flex rounded-full w-10 h-10' src={currentCreator?.profilePicture} alt="" />
                              </div>
                              <div className="flex pl-3 h-full items-center font-bold">{currentCreator?.name}</div>
                              <div className="flex h-full items-center pl-1">
                                    <MdVerified style={{color: "blue"}} />
                              </div>
                        </div>
                        <div className="flex w-full h-32 justify-center items-center font-medium">Send your Love to {currentCreator?.name} to become a fan</div>
                        <div className="flex flex-col items-center h-full w-full justify-start pt-5">
                              <div className="flex border w-10/12 items-center rounded-lg h-12">
                                    <Dropdown options={options} name="currency" />
                                    <input name="amount" type="number" placeholder='Enter the Amount' className='flex w-40 h-full border-none ml-4' />
                              </div>
                              <input name="name" placeholder='Your Name (Optional)' type="text" className="flex rounded-lg w-10/12 h-12 border mt-4 text-sm items-center pl-7" />
                              <input name="comment" placeholder='Say Something Nice(Optional)' className='flex border w-10/12 text-sm mt-5 h-24 rounded-lg pl-7 pt-1' />
                        </div>
                        <div className="flex w-full justify-center items-center">
                              <p className='flex bg-blue-600 text-white w-28 justify-center rounded-xl'>Support $20</p>
                        </div>

                  </div>
            </div>
      )
}

export default Popup