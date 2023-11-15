import React from 'react'
<<<<<<< HEAD
import { CirclePicker} from 'react-color'
import { useSnapshot } from 'valtio'
=======
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

>>>>>>> nueva-rama
import state from '../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
<<<<<<< HEAD
      <CirclePicker
              color={snap.color}
              colors={[
                "#263238",
                "#e64a19",
                "#f57c00",
                "#12A09A",
                "#2e7d32",
                "#01579b",
                "#d81b60",
                "#b71c1c",
              ]}
              onChange={(color) => state.color = color.hex}
      />      
=======
      <SketchPicker 
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
      />
>>>>>>> nueva-rama
    </div>
  )
}

export default ColorPicker