import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';


const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      { snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation("down")}>
            <img 
              src='./logo.png'
              alt="logo"
              className="w-[6rem] h-[6rem] object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text text-green-700">
                Vistiendo <br className="xl:block hidden" /> a tu manera .
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}
              className="flex flex-col gap-5">    
              <p className="max-w-md font-normal text-gray-600 text-base">
              Crea tu unico y exclusivo estilo y previsualiza en la herramienta 3D. <strong>libera tu imaginacion </strong>{" "} y defina tu propio estilo.
              </p>
              <CustomButton 
                type="filled"
                title="Personalizar"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
    
  )
}

export default Home