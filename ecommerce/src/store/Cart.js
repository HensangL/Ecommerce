import {createSlice} from '@reduxjs/toolkit';
const initialstate= {
    item : [],


}
const cartSlice= createSlice({
     name: 'cart',
     initialState: initialstate,
     reducers:{

     }
})
export default cartSlice.reducer;
