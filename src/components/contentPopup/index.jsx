import React from 'react';
import {IoIosArrowBack} from "react-icons/io";
import {MdVerified} from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentCreator, setDonatedCreators} from '../../context';



const Popup=() => {

      const [donations, setDonations]=React.useState({
            currency: 'USD',
      });

      const dispatch=useDispatch()
      const {currentCreator}=useSelector(state => state.creator)

      const options=[
            {
                  id: "wqe",
                  currency: "USD",
                  unicode: "$",
            },
            {
                  id: "cde",
                  currency: "CAD",
                  unicode: "$"
            },
            {
                  id: "ere",
                  currency: "EUR",
                  unicode: "€"

            },
            {
                  id: "ide",
                  currency: "INR",
                  unicode: "₹"
            },
            {
                  id: "af",
                  currency: "AFN",
                  unicode: "؋"
            },
            {
                  id: "bs",
                  currency: "BSD",
                  unicode: "$"
            },
            {
                  id: "bz",
                  currency: "BZD",
                  unicode: "$"
            },
            {
                  id: "ar",
                  currency: "ARS",
                  unicode: "$"
            },
      ];
      const handleChange=(e) => {
            setDonations({...donations, [e.target.name]: e.target.value})
      }

      return (
            <div id='popUp' className='hidden flex-col fixed bg-white top-5 justify-center items-center w-[70vw] border rounded-md h-[85vh]'>
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
                                    <select onChange={handleChange} className='flex w-20 h-full outline-none bg-transparent border-none ml-4' name='currency'>
                                          {options.map(curr => (
                                                <option key={curr.id} value={curr.currency}>{curr.unicode}{curr.currency}</option>
                                          ))}
                                    </select>
                                    <input onChange={handleChange} name="amount" type="number" placeholder='Enter the Amount' className='flex w-40 h-full border-none ml-4' />
                              </div>
                              <input onChange={handleChange} name="name" placeholder='Your Name (Optional)' type="text" className="flex rounded-lg w-10/12 h-12 border mt-4 text-sm items-center pl-7" />
                              <input onChange={handleChange} name="comment" placeholder='Say Something Nice(Optional)' className='flex border w-10/12 text-sm mt-5 h-24 rounded-lg pl-7 pt-1' />
                        </div>
                        <div className="flex w-full justify-center items-center">
                              {(donations?.amount&&donations?.name&&donations?.comment)&&(
                                    <p onClick={() => {
                                          dispatch(setDonatedCreators(
                                                {
                                                      creatorName: currentCreator.name,
                                                      creatorId: currentCreator.id,
                                                      amount: donations.amount,
                                                      currency: donations.currency,
                                                      name: donations.name,
                                                      comment: donations.comment
                                                }
                                          ))
                                          document.getElementById('popUp').classList.toggle('hidden');
                                          dispatch(setCurrentCreator(null))
                                    }} className='flex bg-blue-600 text-white w-48 p-2 justify-center cursor-pointer -mt-20 rounded-xl'>Submit {donations.amount} {donations.currency}</p>
                              )}

                        </div>
                        <div className='flex w-full justify-center'>
                              <p className='flex bg-blue-600 mb-6 text-white font-medium w-32 justify-center rounded-full'>Support $20</p>
                        </div>

                  </div>
            </div>
      )
}

export default Popup