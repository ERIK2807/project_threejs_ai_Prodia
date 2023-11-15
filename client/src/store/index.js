import { proxy } from 'valtio';

const state = proxy({
  intro: true,
<<<<<<< HEAD
  color: '#12A09A',
=======
  color: '#EFBD48',
>>>>>>> nueva-rama
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;