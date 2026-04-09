import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import { useEffect } from "react";

function Modal({ isOpen = false, children, onRequestClose }) {
  useEffect(() => {
    const handle = (e) => {
      if (e.code === "Escape") {
        onRequestClose();
      }
    };
    if(isOpen){
      document.addEventListener("keydown", handle);
    }

    // Closure
    return () => {
      document.removeEventListener("keydown", handle);
    };
  }, [onRequestClose, isOpen]);
  if (!isOpen) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        {/* Close button */}
        <button className={styles.closeBtn} onClick={onRequestClose}>
          &times;
        </button>

        {/* Children */}
        <div className={styles.inner}>{children}</div>
      </div>

      {/* Overlay */}
      <div className={styles.overlay} onClick={onRequestClose}></div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.bool,
};

export default Modal;
