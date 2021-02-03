import React from "react";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { useHistory } from "react-router-dom";

const Table = () => {
  const History = useHistory();
  return (
    <div style={{ maxWidth: "100%" }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => History.push("/admin/user/AddUser")}
      >
        Add User
      </Button>
      <MaterialTable
        columns={[
          { title: "Name", field: "name" },
          { title: "Last Name", field: "surname" },
          { title: "Birthday", field: "birthYear" },
          { title: "Actions", field: "actions" },
        ]}
        data={[
          {
            name: "a",
            surname: "Baran",
            birthYear: "1922",
            actions: (
              <div>
                <IconButton>
                  <EditIcon onClick={() => History.push("/editUser")} />
                </IconButton>
                <IconButton>
                  <DeleteIcon onClick={() => console.log("Delete Icon")} />
                </IconButton>
              </div>
            ),
          },
          {
            name: "b",
            surname: "123",
            birthYear: "1987",
            actions: <div>Hello</div>,
          },
        ]}
        title="Users in Record"
      />
    </div>
  );
};

export default Table;
