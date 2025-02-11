export const textoMinuscula = (texto) => {
    return texto.toLowerCase()
    .normalize("NFD") // Elimina acentos
    .replace(/[^a-z0-9\s-]/g, "") // Remueve caracteres especiales
    .trim()
    .replace(/\s+/g, "-"); // Reemplaza espacios por guiones
}