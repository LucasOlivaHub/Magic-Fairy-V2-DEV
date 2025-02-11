import React, { useEffect, useState } from 'react';
import { validarEmail, validarLetras, validarNumeros } from '../../helpers/utilidades';
import { useDispatch, useSelector } from 'react-redux';
import { actualizarInfoUsuario } from '../../features/compraSlice/usuarioSlice';
import { v4 as uuidv4 } from 'uuid';

export const FormularioCheckout = ({ setCompleto }) => {
    const prodsCarritoCheckout = useSelector(state => state.carrito.carrito);
    const userInfoSlice = useSelector(state => state.usuario.infoUsuario);

    const dispatch = useDispatch();

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: userInfoSlice.nombre ? userInfoSlice.nombre : '',
        email: userInfoSlice.email ? userInfoSlice.email : '',
        direccion: userInfoSlice.direccion ? userInfoSlice.direccion : '',
        codPostal: userInfoSlice.codPostal ? userInfoSlice.codPostal : '',
        telefono: userInfoSlice.telefono ? userInfoSlice.telefono : ''
    });

    const [validaciones, setValidaciones] = useState({
        nombre: null,
        email: null,
        direccion: null,
        codPostal: null,
        telefono: null
    });

    const [tocado, setTocado] = useState({
        nombre: false,
        email: false,
        direccion: false,
        codPostal: false,
        telefono: false
    });

    const [idCompra] = useState(uuidv4());

    // Validar un campo individualmente
    const validarCampo = (campo, valor) => {
        let esValido = true;

        switch (campo) {
            case 'nombre':
                esValido = validarLetras(valor);
                break;
            case 'email':
                esValido = validarEmail(valor);
                break;
            case 'direccion':
                esValido = valor.length > 5;
                break;
            case 'codPostal':
                esValido = validarNumeros(valor) && valor.length > 3;
                break;
            case 'telefono':
                esValido = validarNumeros(valor) && valor.length >= 7;
                break;
            default:
                esValido = false;
        }

        setValidaciones(prev => ({ ...prev, [campo]: esValido }));
    };

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosUsuario(prev => ({ ...prev, [name]: value }));
        
        validarCampo(name, value);
    };

    const handleBlur = (campo) => {
        
        setTocado(prev => ({ ...prev, [campo]: true }));
        validarCampo(campo, datosUsuario[campo]);
    };

    // Validar todo el formulario
    const validarFormulario = () => {
        let formularioValido = true;

        Object.entries(datosUsuario).forEach(([campo, valor]) => {
            validarCampo(campo, valor);
            if (!valor || validaciones[campo] === false) {
                formularioValido = false;
            }
        });

        return formularioValido;
    };

    // Enviar datos al slice si todo es válido
    const manejarEnvio = () => {
        if (validarFormulario()) {
            dispatch(actualizarInfoUsuario({
                ...datosUsuario,
                productos: prodsCarritoCheckout,
                id: idCompra
            }));
            setCompleto(true);
        } else {
            setCompleto(false);
        }
    };

    // Validar y actualizar datos en Redux
    useEffect(() => {
        manejarEnvio();
    }, [datosUsuario]);

    return (
        <form className='cart-form'>
            <h4>1. Complete sus datos para continuar con la compra</h4>
            <div className='formlabels-container mt-2'>
                <label>Nombre:<b className='label-required'>*</b>
                    <input
                        type='text'
                        name='nombre'
                        value={datosUsuario.nombre}
                        onChange={handleChange}
                        onBlur={() => handleBlur('nombre', datosUsuario.nombre)}
                        placeholder='Ingrese su nombre'
                        className={`${tocado.nombre && datosUsuario.nombre.length > 0 && validaciones.nombre === false ? 'input-error' : ''}`}
                        required
                    />
                    <span className={`error-msg ${tocado.nombre && datosUsuario.nombre.length > 0 && validaciones.nombre === false ? '' : 'disabled'}`}>
                        Nombre inválido
                    </span>
                </label>

                <label>Email:<b className='label-required'>*</b>
                    <input
                        type='email'
                        name='email'
                        value={datosUsuario.email}
                        onChange={handleChange}
                        onBlur={() => handleBlur('email', datosUsuario.email)}
                        placeholder='Ingrese su email'
                        required
                        className={`${tocado.email && datosUsuario.email.length > 0 && validaciones.email === false ? 'input-error' : ''}`}
                    />
                    <span className={`error-msg ${tocado.email && datosUsuario.email.length > 0 && validaciones.email === false ? '' : 'disabled'}`}>
                        Email inválido
                    </span>
                </label>

                <label>Dirección:<b className='label-required'>*</b>
                    <input
                        type='text'
                        name='direccion'
                        value={datosUsuario.direccion}
                        onChange={handleChange}
                        onBlur={() => handleBlur('direccion', datosUsuario.direccion)}
                        placeholder='Ingrese su dirección'
                        className={`${tocado.direccion && datosUsuario.direccion.length > 0 && validaciones.direccion === false ? 'input-error' : ''}`}
                        required
                    />
                    <span className={`error-msg ${tocado.direccion && datosUsuario.direccion.length > 0 && validaciones.direccion === false ? '' : 'disabled'}`}>
                        Dirección inválida
                    </span>
                </label>

                <label>Código Postal:<b className='label-required'>*</b>
                    <input
                        type='text'
                        name='codPostal'
                        value={datosUsuario.codPostal}
                        onChange={handleChange}
                        onBlur={() => handleBlur('codPostal', datosUsuario.codPostal)}
                        maxLength={5}
                        placeholder='Ingrese su código postal'
                        className={`${tocado.codPostal && datosUsuario.codPostal.length > 0 && validaciones.codPostal === false ? 'input-error' : ''}`}
                        required
                    />
                    <span className={`error-msg ${tocado.codPostal && datosUsuario.codPostal.length > 0 && validaciones.codPostal === false ? '' : 'disabled'}`}>
                        Código postal inválido
                    </span>
                </label>

                <label>Teléfono:<b className='label-required'>*</b>
                    <div>
                        <b>+54 </b>
                        <input
                            type='tel'
                            name='telefono'
                            value={datosUsuario.telefono}
                            max={25}
                            onChange={handleChange}
                            onBlur={() => handleBlur('telefono', datosUsuario.telefono)}
                            placeholder='Ingrese su número'
                            className={`${tocado.telefono && datosUsuario.telefono.length < 0 && validaciones.telefono === false ? 'input-error' : ''}`}
                            required
                        />
                    </div>
                    <span className={`error-msg ${tocado.telefono && datosUsuario.telefono.length < 0 && validaciones.telefono === false ? '' : 'disabled'}`}>
                        Teléfono inválido
                    </span>
                </label>
            </div>
        </form>
    );
};
