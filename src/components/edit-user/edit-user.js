import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateUser } from "../../redux/actions";
import CloseIcon from "../../assets/cancel.svg";

import "./edit-user.css";

const EditUser = ({ onClose }) => {
  const dispatch = useDispatch();
  const editingUser = useSelector(({ users }) => users.editingUser);
  const [user, setUser] = React.useState(editingUser);

  const handlechange = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const editUserSubmit = e => {
    e.preventDefault();
    dispatch(updateUser(user, false));
    onClose();
  };

  return (
    <>
      <div className="head-popup">
        <h2>Update user</h2>
        <div className="close-btn" onClick={onClose}>
          <img src={CloseIcon} alt="Close" />
        </div>
      </div>
      <form className="form">
        <div>
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            onChange={(e) => handlechange("name", e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => handlechange("email", e.target.value)}
          />
        </div>
        <button className="btn btn-modal" onClick={editUserSubmit}>
          Update user
        </button>
      </form>
    </>
  );
};

export default EditUser;
