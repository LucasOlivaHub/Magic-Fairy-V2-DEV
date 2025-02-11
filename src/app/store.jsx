import { configureStore } from '@reduxjs/toolkit'
import { productosSlice } from '../features/productosSlice/productosSlice'
import { carritoSlice } from '../features/productosSlice/carritoSlice'
import { usuarioSlice } from '../features/compraSlice/usuarioSlice'

export const store = configureStore({
    reducer: {
        productos: productosSlice.reducer,
        carrito: carritoSlice.reducer,
        usuario: usuarioSlice.reducer
    }
})