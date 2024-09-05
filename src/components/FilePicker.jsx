import React, { useEffect } from "react";

import CustomButton from "./CustomButton";
import useTextureLogoState from "../store/useTextureLogoState";

const FilePicker = ({ file, setFile, readFile }) => {
  const { textureLogosState, setTextureLogoState } = useTextureLogoState();

  const convertBlobToImageUrl = (name, type) => {
    if (file) {
      // if (imageUrl) {
      //   URL.revokeObjectURL(imageUrl);
      // }
      const newImageUrl = URL.createObjectURL(file);
      setTextureLogoState({
        name,
        type,
        image: newImageUrl
      })
    }
  };
  useEffect(() => {
    console.log(textureLogosState);
  })
  return (
    <div className="filepicker-container">
      <div className="flex-1 flex flex-col">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor="file-upload" className="filepicker-label">
          Upload File
        </label>

        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === "" ? "No file selected" : file.name}
        </p>
      </div>

      <div className="mt-4 flex flex-col space-y-2 flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="left logo"
          handleClick={() => {
            convertBlobToImageUrl("left logo", "leftLogo");
            readFile("logo");
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="outline"
          title="right logo"
          handleClick={() => {
            convertBlobToImageUrl("right logo", "rightLogo");
            readFile("logo");
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="outline"
          title="front logo"
          handleClick={() => {
            convertBlobToImageUrl("front logo", "frontLogo");
            readFile("logo");
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="outline"
          title="back logo"
          handleClick={() => {
            convertBlobToImageUrl("back logo", "backLogo");
            readFile("logo");
          }}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Full"
          handleClick={() => readFile("full")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default FilePicker;
