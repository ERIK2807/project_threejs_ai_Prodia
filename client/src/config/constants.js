<<<<<<< HEAD
import { swatch, fileIcon, ai, logoShirt, stylishShirt,download } from "../assets";
=======
import { swatch, fileIcon, ai, logoShirt, stylishShirt } from "../assets";
>>>>>>> nueva-rama

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },
<<<<<<< HEAD
  // {
  //   name: "stylishShirt",
  //   icon: stylishShirt,
  // },
];

export const DownldTabs = [
  {
    name: "imgDownld",
    icon: download,
  },
];



=======
  {
    name: "stylishShirt",
    icon: stylishShirt,
  },
];

>>>>>>> nueva-rama
export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
