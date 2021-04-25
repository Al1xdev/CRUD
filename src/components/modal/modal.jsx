import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { modalOpen, addUser } from "../../redux/actions";
import {EditUser} from "../";

import "./modal.css";

import CloseIcon from "../../assets/cancel.svg";

const Modal = () => {
  const dispatch = useDispatch();
  const modalActive = useSelector(({ users }) => users.modalOpening);
  const isEditingUser = useSelector(({ users }) => users.isEditingUser);

  const [userData, setUserData] = React.useState({
    id: null,
    name: "",
    email: "",
  });

  const handlechange = (key, value) => {
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    dispatch(addUser(userData));
    setUserData({id: null, name: "", email: ""});
    onClose();
  };

  const onClose = () => dispatch(modalOpen(false));

  return (
    <div className={modalActive ? "modal active" : "modal"}>
      <div
        className={modalActive ? "modal-container active" : "modal-container"}
        onClick={(e) => e.stopPropagation()}
      >
        {isEditingUser ? (
          <EditUser onClose={onClose}/>
        ) : (
          <>
            <div className="head-popup">
              <h2>New Contact</h2>
              <div className="close-btn" onClick={onClose}>
                <img src={CloseIcon} alt="Close" />
              </div>
            </div>
            <form className="form" onSubmit={handleSubmitForm}>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => handlechange("name", e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handlechange("email", e.target.value)}
                  required
                />
              </div>
              <button className="btn btn-modal">
                Add to table
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
