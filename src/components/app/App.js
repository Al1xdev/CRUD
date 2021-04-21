import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataTable, LaodingIndicator } from "..";

import { fetchUsers } from "../../redux/actions";

import "./app.css"

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector(({users}) => users.items);
  const loading = useSelector(({users}) => users.isLoading)
  
  React.useEffect(() => dispatch(fetchUsers()), [dispatch]);

  return (
    <div className="container">
      {loading ? <DataTable data={users}/> : <LaodingIndicator />}
    </div>
  );
};

export default App;
