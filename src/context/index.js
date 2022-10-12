import {configureStore, createSlice} from "@reduxjs/toolkit";



const creatorSlice=createSlice({
      name: 'creator',
      initialState: {
            creators: [
                  {
                        id: 1,
                        name: 'BB kI Vines',
                        profilePicture: "https://static.toiimg.com/thumb/msid-77216664,imgsize-,width-641,resizemode-4/77216664.jpg",
                        desgination: "Youtuber",
                  },
                  {
                        id: 2,
                        name: 'CarryMinati',
                        profilePicture: "https://wallpaperaccess.com/full/2780348.jpg",
                        desgination: "Youtuber",
                  },
                  {
                        id: 3,
                        name: 'Pre Die Pie',
                        profilePicture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ZEjA_heYUxQBZPkaEw7UcjE31NjH5jrHOg&usqp=CAU",
                        desgination: "Creator",
                  },
                  {
                        id: 2,
                        name: 'CarryMinati',
                        profilePicture: "https://wallpaperaccess.com/full/2780348.jpg",
                        desgination: "Youtuber",
                  },
                  {
                        id: 5,
                        name: 'BB kI Vines',
                        profilePicture: "https://static.toiimg.com/thumb/msid-77216664,imgsize-,width-641,resizemode-4/77216664.jpg",
                        desgination: "Youtuber",
                  }
            ],
            currentCreator: null,
      },
      reducers: {
            setCurrentCreator: (state, action) => {
                  state.currentCreator=action.payload;
            }
      }
})


export const store=configureStore({
      reducer: {
            creator: creatorSlice.reducer,
      }
})

export const {
      setCurrentCreator
}=creatorSlice.actions;

