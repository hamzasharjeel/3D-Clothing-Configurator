// src/store/useStore.js
import { create } from 'zustand';
import { texturesLogos } from '../config/constants';

const useTextureLogoState = create((set) => ({
  textureLogosState: texturesLogos, 
  setTextureLogoState: (newState) => set((state) => ({
    textureLogosState: [...state.textureLogosState, newState] // Append new state
  })),
}));

export default useTextureLogoState;
