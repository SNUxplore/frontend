import React from "react";

function InfoModal({ setModalOpen, data }) {
  return (
    <div className="ModalWrapper">
      {console.log(data)}
      <button onClick={() => setModalOpen(false)}>close</button>
      <div className="ModalWrapper__container">{data}Hi modal here</div>
    </div>
  );
}

export default InfoModal;
