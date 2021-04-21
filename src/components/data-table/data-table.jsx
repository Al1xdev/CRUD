import React from "react";
import { modalOpen, deleteUser, editUser } from "../../redux/actions";
import { useDispatch } from "react-redux";

import { Modal } from "..";

import AddIcon from "../../assets/plus.svg";

import "./data-table.css";

const DataTable = ({ data }) => {
  const dispatch = useDispatch();

  const handlerDeleteUser = id => dispatch(deleteUser(id));

  const handlerEditUser = (id, visible) => dispatch(editUser(id, visible));

  const openModalPage = () => dispatch(modalOpen(true, null));

  return (
    <div className="main">
      <div className="add-top" onClick={openModalPage}><img src={AddIcon} className="add" alt="Add"/></div>
      <div>
        <table>
        <thead>
          <tr className="table-head under-line">
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <button
                    className="btn btn-edit"
                    onClick={() => {openModalPage(); handlerEditUser(item.id, true)}}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-del"
                    onClick={() => handlerDeleteUser(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal />
      </div>
    </div>
  );
};

export default DataTable;
