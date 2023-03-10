import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateSpotForm from "./CreateSpotForm";
import "./CreateVehicleFormModal.css";

function CreateSpotFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>
        Create Vehicle
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateVehicleForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotFormModal;
