import React from 'react';
import "./ModalDialog.css";

const ModalDialog = ({ isShown, onClose, onConfirm, title, confirmationButtonText, children }) => {
  return (
    <div className={`modal fade ${isShown ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close ms-auto" onClick={onClose}/>
          </div>
          <div className="modal-body">
            {children}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={onConfirm}>
              {confirmationButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;