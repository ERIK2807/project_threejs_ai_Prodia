import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { download } from '../assets';
import { downloadCanvasToImage, reader } from '../config/helpers';
import { EditorTabs, FilterTabs, DecalTypes, DownldTabs } from '../config/constants';
import { fadeAnimation, slideAnimation } from '../config/motion';
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from '../components';
import { peticionprodia } from '../components/peticionprodia';


const Customizer = () => {
  const snap = useSnapshot(state);

  const [file, setFile] = useState('');

  const [prompt, setPrompt] = useState('');
  const [generatingImg, setGeneratingImg] = useState(false);

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  })


// *****************
  // Descargar imagen codificada en base64,Separar el encabezado de la imagen (data:image/png;base64,) del contenido de la imagen en Base64
let imagenBase64 = snap.logoDecal.split(',')[1];
  // function downImgIA(imagenBase64) {
  //   imagenBase64 = snap.logoDecal.split(',')[1];
  //   const rutaArchivo = '../img/imagenIA.jpg';
  //   const imagenBlob = obtenerBlobDesdeBase64(imagenBase64);
  
  //   const urlImagen = URL.createObjectURL(imagenBlob);
  //   const linkDescarga = document.createElement('a');
  //   linkDescarga.download = 'imagenIA.jpg';
  //   linkDescarga.href = urlImagen;
  
  //   document.body.appendChild(linkDescarga);
  //   linkDescarga.click();
  //   document.body.removeChild(linkDescarga);
  //   linkDescarga.download = rutaArchivo.substring(rutaArchivo.lastIndexOf('/') + 1);
  // }  
  // function obtenerBlobDesdeBase64(base64) {
  //   const separador = ',';
  //   const indiceBase64 = base64.indexOf(separador) + separador.length;
  //   const base64SinEncabezado = base64.substring(indiceBase64);
  //   const tipoArchivo = 'image/jpeg';
  //   const binario = window.atob(base64SinEncabezado);
  //   const longitud = binario.length;
  //   const arregloBytes = new Uint8Array(longitud);
  
  //   for (let i = 0; i < longitud; i++) {
  //     arregloBytes[i] = binario.charCodeAt(i);
  //   }
  
  //   return new Blob([arregloBytes], { type: tipoArchivo });
  // }
  // // *****************


  // show tab content depending on the activeTab
  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />
      case "filepicker":
        return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
        />
      case "aipicker":
        return <AIPicker 
          prompt={prompt}
          setPrompt={setPrompt}
          generatingImg={generatingImg}
          handleSubmit={handleSubmit}
        />
      default:
        return null;
    }
  }

// capturar imagen prodia
const handleSubmit = async(type)=>{
  setGeneratingImg(true);
  const data = await peticionprodia(prompt);
  const response = await fetch(data);
  const blob = await response.blob();
  const base64 = await convertBlobToBase64(blob);
  handleDecals(type,`data:image/png;base64,${base64}`);
  setGeneratingImg(false);  
}

const convertBlobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result.split(",")[1]);
    };
    reader.readAsDataURL(blob);
  });
};

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    state[decalType.stateProperty] = result;

    if(!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab)
    }
  }

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
          state.isLogoTexture = !activeFilterTab[tabName];
        break;
      case "stylishShirt":
          // state.isFullTexture = !activeFilterTab[tabName];
        break;
      default:
        state.isLogoTexture = true;
        state.isFullTexture = false;
        break;
    }

    // after setting the state, activeFilterTab is updated

    setActiveFilterTab((prevState) => {
      return {
        ...prevState,
        [tabName]: !prevState[tabName]
      }
    })
  }

  const readFile = (type) => {
    reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation('left')}
          >
            <div className="flex items-center min-h-screen">
              <
                div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab 
                    key={tab.name}
                    tab={tab}
                    handleClick={() => setActiveEditorTab(tab.name)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton 
              type="filled"
              title="Volver"
              handleClick={() => state.intro = true}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className='filtertabs-container'
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
            {DownldTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                handleClick={()=>downloadCanvasToImage(imagenBase64)}
              />
            ))}
            {/* <button
            onClick={downImgIA}
            >DescargarIA</button> */}
          </motion.div>     
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer  