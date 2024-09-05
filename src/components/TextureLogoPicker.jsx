import React from 'react';
import useTextureLogoState from '../store/useTextureLogoState';

const TextureLogoPicker = ({ texturesLogos, handleTextureLogoClick }) => {
  const {textureLogosState} = useTextureLogoState();
  const textures = textureLogosState.filter((textureLogo) => textureLogo.type === 'texture');
  const frontLogos = textureLogosState.filter((textureLogo) => textureLogo.type === 'frontLogo');
  const backLogos = textureLogosState.filter((textureLogo) => textureLogo.type === 'backLogo');
  const rightLogos = textureLogosState.filter((textureLogo) => textureLogo.type === 'rightLogo');
  const leftLogos = textureLogosState.filter((textureLogo) => textureLogo.type === 'leftLogo');

  const renderImages = (images) => {
    return (
      <div className='grid grid-cols-2 gap-2'>
        {images.map((image, index) => (
          <div key={image.name} onClick={() => handleTextureLogoClick(image)}>
            <img src={image.image} alt={image.name} className='rounded-full w-full' />
          </div>
        ))}
      </div>
    );
  };
  
  

  return (
    <div className='absolute left-full ml-3'>
      <h2>Textures</h2>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(textures)}</div>
      <h2>Front Logos</h2>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(frontLogos)}</div>
      <h2>Back Logos</h2>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(backLogos)}</div>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(frontLogos)}</div>
      <h2>right arm Logos</h2>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(rightLogos)}</div>
      <h2>left arm Logos</h2>
      <div className='flex flex-wrap overflow-y-scroll w-40 h-40'>{renderImages(leftLogos)}</div>
    </div>
  );
};

export default TextureLogoPicker;
