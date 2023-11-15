import React from 'react'
<<<<<<< HEAD
import CustomButton from './CustomButton';
// import saveImage from '../config/saveImage';

=======

import CustomButton from './CustomButton';
>>>>>>> nueva-rama

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea 
        placeholder="Ask AI..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
<<<<<<< HEAD
        />
=======
      />
>>>>>>> nueva-rama
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />

            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
<<<<<<< HEAD
            {/* <CustomButton 
              title="Descargar"
              handleClick={saveImage}
              customStyles="text-xs"
            /> */}
=======
>>>>>>> nueva-rama
          </>
        )}
      </div>
    </div>
  )
}

export default AIPicker