import { createSlice } from '@reduxjs/toolkit'
import productosJSON from '../../data/productos.json'; 

const productosTotales = productosJSON

const initialState = {
    contenido: productosTotales
};

export const productosSlice = createSlice({
  name: 'Productos',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { agregarProducto, borrarProd } = productosSlice.actions

export default productosSlice.reducer