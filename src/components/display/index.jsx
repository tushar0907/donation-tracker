import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {useDispatch, useSelector} from 'react-redux'
import {setCurrentCreator} from '../../context'

const DisplayArea=() => {
      const {creators}=useSelector(state => state.creator)
      const dispatch=useDispatch()
      return (
            <div className='flex h-screen w-96 bg-white border flex-col'>
                  <div className="flex w-full items-center justify-start pl-1 h-16 font-semibold text-lg">Recommended Creators</div>
                  <div className="flex w-full h-full flex-col rounded-xl items-center flex-wrap">
                        <div className="flex flex-wrap mr-5 ml-5 justify-between">
                              {creators?.map(item => (
                                    <div onClick={() => {
                                          document.getElementById("popUp").classList.toggle("hidden");
                                          dispatch(setCurrentCreator(item))
                                    }} className="flex mt-3 h-52 flex-col rounded-lg w-40">
                                          <div className="flex rounded-lg bg-contain overflow-hidden justify-center flex-col h-32 w-full hover:border-4 hover:border-blue-600">
                                                <img src={item.profilePicture} width="205px" alt="" />
                                          </div>
                                          <div className="flex">
                                                <div className="flex w-full font-bold">{item.name}</div>
                                                <AiOutlineHeart style={{height: "30px", width: "20px"}} />
                                          </div>
                                          <div className="flex font-medium">{item.desgination} </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default DisplayArea