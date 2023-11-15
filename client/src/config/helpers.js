<<<<<<< HEAD
import { useSnapshot } from "valtio";

export const downloadCanvasToImage = (imagenBase64) => {
=======
export const downloadCanvasToImage = () => {
>>>>>>> nueva-rama
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "canvas.png";
  document.body.appendChild(link);
  link.click();
<<<<<<< HEAD
  document.body.removeChild(link);  
  downImgIA(imagenBase64);
};

// *****************
  // Descargar imagen codificada en base64,Separar el encabezado de la imagen (data:image/png;base64,) del contenido de la imagen en Base64
  function downImgIA(imagenBase64) {
    // imagenBase64 = snap.logoDecal.split(',')[1];
    const rutaArchivo = '../img/imagenIA.jpg';
    const imagenBlob = obtenerBlobDesdeBase64(imagenBase64);
  
    const urlImagen = URL.createObjectURL(imagenBlob);
    const linkDescarga = document.createElement('a');
    linkDescarga.download = 'imagenIA.jpg';
    linkDescarga.href = urlImagen;
  
    document.body.appendChild(linkDescarga);
    linkDescarga.click();
    document.body.removeChild(linkDescarga);
    linkDescarga.download = rutaArchivo.substring(rutaArchivo.lastIndexOf('/') + 1);
  }  
  function obtenerBlobDesdeBase64(base64) {
    const separador = ',';
    const indiceBase64 = base64.indexOf(separador) + separador.length;
    const base64SinEncabezado = base64.substring(indiceBase64);
    const tipoArchivo = 'image/jpeg';
    const binario = window.atob(base64SinEncabezado);
    const longitud = binario.length;
    const arregloBytes = new Uint8Array(longitud);
  
    for (let i = 0; i < longitud; i++) {
      arregloBytes[i] = binario.charCodeAt(i);
    }
  
    return new Blob([arregloBytes], { type: tipoArchivo });
  }
  // *****************

export const reader = (file) =>
  new Promise((resolve, reject) => {
    // console.log('antes',file)
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
    // console.log('despues',fileReader)
=======
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
>>>>>>> nueva-rama
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};
