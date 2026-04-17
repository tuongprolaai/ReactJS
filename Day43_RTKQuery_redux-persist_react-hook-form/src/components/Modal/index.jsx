import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";

const Modal = forwardRef(
  (
    {
      isOpen: _isOpen = false,
      children,
      onRequestClose,
      closeTimeoutMS = 0,
      overlayClassName,
      className,
      bodyOpenClassName,
      shouldCloseOnOverlayClick = true,
      shoudCloseOnEsc = true,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(_isOpen);
    const modalRoot = document.createElement("div");
    modalRoot.className = "modal-root";

    document.body.appendChild(modalRoot);

    useEffect(() => {
      setIsOpen(_isOpen);
    }, [_isOpen]);
    useImperativeHandle(
      ref,
      () => ({
        open() {
          setIsOpen(true);
        },
        close() {
          setIsOpen(false);
        },
        toggle() {
          setIsOpen(!isOpen);
        },
      }),
      [],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
      setTimeout(onRequestClose, closeTimeoutMS);
    };
    useEffect(() => {
      if (!shoudCloseOnEsc) return;
      const handle = (e) => {
        if (e.code === "Escape") {
          handleRequestClose();
        }
      };
      if (isOpen) {
        document.addEventListener("keydown", handle);
      }

      // Closure
      return () => {
        document.removeEventListener("keydown", handle);
      };
    }, [shoudCloseOnEsc, onRequestClose, isOpen, handleRequestClose]);
    useEffect(() => {
      document.body.classList.add(bodyOpenClassName);
      return () => {
        document.body.classList.remove(bodyOpenClassName);
      };
    }, [bodyOpenClassName]);
    if (!isOpen) return null;
    return createPortal(
      <div className={styles.modal}>
        <div className={clsx(styles.content, className)}>
          {/* Close button */}
          <button className={styles.closeBtn} onClick={handleRequestClose}>
            &times;
          </button>

          {/* Children */}
          <div className={styles.body}>{children}</div>
        </div>

        {/* Overlay */}
        <div
          className={clsx(styles.overlay, overlayClassName)}
          onClick={() => {
            if (shouldCloseOnOverlayClick) handleRequestClose();
          }}
        ></div>
      </div>,
      modalRoot,
    );
  },
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  shoudCloseOnEsc: PropTypes.bool,
  shouldCloseOnOverlayClick: PropTypes.bool,
  closeTimeoutMS: PropTypes.number,
  overlayClassName: PropTypes.string,
  className: PropTypes.string,
  bodyOpenClassName: PropTypes.string,
};

export default Modal;

// 1:53:57