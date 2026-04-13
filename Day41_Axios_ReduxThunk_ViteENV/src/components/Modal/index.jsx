import PropTypes from "prop-types";

import styles from "./Modal.module.scss";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import clsx from "clsx";

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
        }, [onRequestClose, isOpen, handleRequestClose]);
        useEffect(() => {
            document.body.classList.add(bodyOpenClassName);
            return () => {
                document.body.classList.remove(bodyOpenClassName);
            };
        }, [bodyOpenClassName]);
        if (!isOpen) return null;
        return (
            <div className={styles.modal}>
                <div className={clsx(styles.content, className)}>
                    {/* Close button */}
                    <button
                        className={styles.closeBtn}
                        onClick={handleRequestClose}
                    >
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
            </div>
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
