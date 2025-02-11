import { createSlice } from '@reduxjs/toolkit'

// 🚀 Cargar el carrito desde localStorage si existe
const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];

const initialState = {
    carrito: carritoGuardado
};

export const carritoSlice = createSlice({
  name: 'Carrito',
  initialState,
  reducers: {
    // ---- AGREGAR PRODUCTOS ----
    agregarProducto: (state, action) => {
      const { producto, cantidad, color, talle } = action.payload;

      const productoAgregado = {
        id: producto.id + "-" + color + "-" + talle,
        nombreProducto: producto.titulo,
        colorElegido: color,
        talleElegido: talle,
        cantidad: cantidad,
        descuento: producto.descuento,
        precioOriginal: producto.precio,
        precioUnitarioDescuento: producto.descuento ? (producto.precio * (1 - producto.descuento / 100)) : producto.precio,
        precio: producto.descuento ? (producto.precio * (1 - producto.descuento / 100)) : producto.precio,
      }

      const productoExistente = state.carrito.find(
        (p) =>
          p.nombreProducto === productoAgregado.nombreProducto &&
          p.colorElegido.color === productoAgregado.colorElegido.color &&
          p.talleElegido === productoAgregado.talleElegido
      );

      if (productoExistente) {
        productoExistente.cantidad = parseInt(productoExistente.cantidad + productoAgregado.cantidad);
        productoExistente.precio = productoAgregado.precio * productoExistente.cantidad;
      } else {
        state.carrito.push(productoAgregado);
      }

      // 💾 Guardar el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(state.carrito));
    },

    // ---- BORRAR PRODUCTOS ----
    borrarProducto: (state, action) => {
      const prodAEliminar = state.carrito.find(prod => prod.id === action.payload);
      if (prodAEliminar) {
        state.carrito.splice(state.carrito.indexOf(prodAEliminar), 1);
      }
      localStorage.setItem('carrito', JSON.stringify(state.carrito));  // 💾 Actualizar localStorage
    },

    // --- SUMAR CANTIDAD PRODUCTO ---
    sumarCantidadCarrito: (state, action) => {
      const prodSumarCantidad = state.carrito.find(prod => prod.id === action.payload);
      if (prodSumarCantidad.cantidad < 20) {
        prodSumarCantidad.cantidad += 1; 
        prodSumarCantidad.precio = prodSumarCantidad.precioUnitarioDescuento * prodSumarCantidad.cantidad;
      }
      localStorage.setItem('carrito', JSON.stringify(state.carrito));  // 💾 Actualizar localStorage
    },

    // --- RESTAR CANTIDAD PRODUCTO ---
    restarCantidadCarrito: (state, action) => {
      const prodRestarCantidad = state.carrito.find(prod => prod.id === action.payload);
      if (prodRestarCantidad.cantidad > 1) {
        prodRestarCantidad.cantidad -= 1;
        prodRestarCantidad.precio = prodRestarCantidad.precioUnitarioDescuento * prodRestarCantidad.cantidad;
      }
      localStorage.setItem('carrito', JSON.stringify(state.carrito));  // 💾 Actualizar localStorage
    },

    // ---- BORRAR TODO EL CARRITO ----
    borrarCarrito: (state) => {
      state.carrito = [];
      localStorage.removeItem('carrito');  // 🗑️ Limpiar localStorage
    }
  },
})

export const { agregarProducto, borrarProducto, sumarCantidadCarrito, restarCantidadCarrito, borrarCarrito } = carritoSlice.actions

export default carritoSlice.reducer
