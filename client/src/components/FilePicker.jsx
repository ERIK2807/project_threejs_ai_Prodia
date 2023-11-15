import React from 'react'

import CustomButton from './CustomButton'
<<<<<<< HEAD
// Console.log("Hello")
=======

>>>>>>> nueva-rama
const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input 
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
<<<<<<< HEAD
          
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Cargar imagen
        </label>
        
        <p className="mt-2 text-gray-500 truncate">
          {file === '' ? `No se ha seleccionado un archivo` : file.name}
=======
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name}
>>>>>>> nueva-rama
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton 
          type="outline"
          title="Logo"
          handleClick={() => readFile('logo')}
          customStyles="text-xs"
        />
        <CustomButton 
          type="filled"
          title="Full"
          handleClick={() => readFile('full')}
          customStyles="text-xs"
        />
      </div>
    </div>
  )
}
<<<<<<< HEAD
=======

>>>>>>> nueva-rama
export default FilePicker