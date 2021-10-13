import React, { useState } from "react";
import "./styles.css";

import Modal from "react-modal";

Modal.setAppElement("#root");
export default function App() {
  const imgUrl = "https://picsum.photos/seed/picsum/400/200";
  const gifUrl =
    "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif";

  const graphUrl =
    "https://www.pngitem.com/pimgs/m/210-2108040_total-constituencies-in-bar-graph-hd-png-download.png";
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(imgUrl);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  function loadGif() {
    setImgSrc(gifUrl);
    setTimeout(() => {
      setImgSrc(imgUrl);
    }, 7000);
  }

  function loadGraph() {
    setImgSrc(graphUrl);
  }
  return (
    <div className="App">
      <img className="image" src={imgUrl} alt="random" />
      <button className="modal-button" onClick={toggleModal}>
        Open Modal
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="my-modal"
      >
        <div>Dialog Box.</div>
        <img className="modal-image" src={imgSrc} alt="random" />
        <button onClick={toggleModal} className="close-btn">
          X
        </button>
        <div className="button-container">
          <button className="modal-button" onClick={loadGif}>
            Load Gif
          </button>
          <button className="modal-button" onClick={loadGraph}>
            Load Graph
          </button>
        </div>
      </Modal>
    </div>
  );
}
