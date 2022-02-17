import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./GalleryImageList.css";
import { photos, PhotoType } from "../data/photos";
import { Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function GalleryImageList() {
  const [selectedPhoto, setSelectedPhoto] = React.useState<PhotoType | null>(
    null
  );
  const determineColumns = () => {
    return window.visualViewport.width < 800 ? 2 : 4;
  };

  const handleGalleryImageClick = (photo: PhotoType, close?: boolean) => {
    setSelectedPhoto(photo);
  };

  const handleOnClose = () => {
    setSelectedPhoto(null);
  };

  return (
    <div>
      {selectedPhoto && (
        <Dialog
          open={!!selectedPhoto}
          onClose={handleOnClose}
          className="singleGalleryImgDialog"
        >
          <IconButton
            aria-label="delete"
            onClick={handleOnClose}
            className="dialogCloseButton"
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="galleryImg singleGalleryImg"
            loading="lazy"
          />
        </Dialog>
      )}
      <ImageList
        cols={determineColumns()}
        className="galleryImageList"
        gap={10}
        variant="masonry"
      >
        {photos.map((photo) => (
          <ImageListItem key={photo.src}>
            <img
              src={photo.src}
              alt={photo.alt}
              className="galleryImg"
              loading="lazy"
              onClick={() => handleGalleryImageClick(photo)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
