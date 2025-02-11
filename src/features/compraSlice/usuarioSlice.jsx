import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    infoUsuario: []
};

export const usuarioSlice = createSlice({
  name: 'Usuario',
  initialState,
  reducers: {
    actualizarInfoUsuario: (state, action) => {
      const infoActualizada = action.payload;
      state.infoUsuario = infoActualizada; 
      console.log(infoActualizada);
  }
  },
})

// Action creators are generated for each case reducer function
export const { actualizarInfoUsuario } = usuarioSlice.actions

export default usuarioSlice.reducer