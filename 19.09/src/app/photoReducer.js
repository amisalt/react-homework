import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const getPhotos = createAsyncThunk(
  'photos/getPhotos',
  async ({albumID,page,number}, thunkAPI) => {
    const response= await fetch(`https://jsonplaceholder.typicode.com/albums/${albumID}/photos`)
    const data = await response.json()    
    return {data, page, number, albumID}
  }
)
const photoSlice = createSlice({
  name: 'photos',
  initialState: {
    loading:false,
    error:"",
    photos:[],
    photosDisplay:[],
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getPhotos.pending, (state, action)=>{
      state.loading = true
      state.error = ""
    })
    .addCase(getPhotos.fulfilled, (state, action)=>{
      state.loading = false
      const {page, number, albumID} = action.payload
      console.log(page, number, albumID);
      
      state.photos = [...action.payload.data]
      state.photosDisplay = state.photos.filter(photo=>photo.albumId === albumID).slice((page-1)*number,page*number)
      console.log(state.photos.filter(photo=>photo.albumId === albumID));
      
    })
    .addCase(getPhotos.rejected, (state,action)=>{
      state.loading = false
      state.error = action.error.message
    })
  }
})

export const {setPhotos} = photoSlice.actions
export default  photoSlice.reducer