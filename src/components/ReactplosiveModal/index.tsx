import React, { ReactNode, useEffect, useState } from "react";
import "./style.css";
import explosionGif from "./explosion-gif";

const DEFAULTS = {
  width: "500px",
  modalVisibilityTimeout: 400,
  outsideClickEnabled: true,
  closeIconColor: "rgba(0, 0, 0, 0.2)",
};

type Props = {
  title?: ReactNode;
  children: ReactNode;
  isVisible: boolean;
  width?: string;
  onClose: (visibility: boolean) => void;
  outsideClickEnabled?: boolean;
};

const ReactplosiveModal = ({
  title,
  children,
  isVisible,
  onClose,
  outsideClickEnabled = DEFAULTS.outsideClickEnabled,
  width = DEFAULTS.width,
}: Props) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => setActive(isVisible),
      DEFAULTS.modalVisibilityTimeout
    );
    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <div
      className={
        isVisible
          ? "reactplosive-modal reactplosive-modal--active"
          : "reactplosive-modal"
      }
    >
      <div
        className={
          active
            ? "reactplosive-modal-container reactplosive-modal-container---active"
            : "reactplosive-modal-container"
        }
        style={{
          width,
        }}
      >
        <button
          className="reactplosive-modal-close"
          onClick={() => onClose(false)}
        >
          <CloseIcon />
        </button>
        {title ? (
          <div className="reactplosive-modal-header">
            <div className="reactplosive-modal-header-title">{title}</div>
          </div>
        ) : null}

        <div className={"reactplosive-modal-content"}>{children}</div>
      </div>
      <div
        className="reactplosive-modal-bg"
        onClick={() => (outsideClickEnabled ? onClose(false) : null)}
      >
        <img
          className="reactplosive-modal-explosion-gif"
          src={isVisible ? explosionGif : ""}
        />
      </div>
    </div>
  );
};

const CloseIcon = ({ color = DEFAULTS.closeIconColor }: { color?: string }) => {
  return (
    <svg
      width="12"
      height="12"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="1" y1="11" x2="11" y2="1" stroke={color} strokeWidth="2" />
      <line x1="1" y1="1" x2="11" y2="11" stroke={color} strokeWidth="2" />
    </svg>
  );
};

export default ReactplosiveModal;
