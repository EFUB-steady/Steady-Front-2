import React from "react";
import "./style.css";
import { ModalHeader, ModalMain, ModalSection } from "./style.js";

const Modal = (props) => {
  const { open, header } = props;

  return (
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <ModalSection>
          <ModalHeader>{header}</ModalHeader>
          <ModalMain>{props.children}</ModalMain>
        </ModalSection>
      ) : null}
    </div>
  );
};
export default Modal;
