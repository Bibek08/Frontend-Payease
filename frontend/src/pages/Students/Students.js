import React from "react";
import "../Students/Students.css";
import { useEffect, useState } from "react";
import { Button, Table, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../createStudent/CreateStudent";
function Students() {
  // to chooose semester
  const [selectedSemester, setSelectedSemester] = useState(1);

  const handleSemesterChange = (e) => {
    setSelectedSemester(parseInt(e.target.value));
  };

  // const Students = () => {
  const [student, setStudent] = useState([]);
  const [show, setShow] = useState(false);
  const [updatedStudent, setUpdatedStudent] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/students").then((res) => {
      setStudent(res.data);
    });
  }, []);

  //function to delete Student
  const deleteStudent = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    axios
      .delete(`/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    window.location.reload();
  };

  //function to goBack after click of create Student Btn
  const goBack = () => {
    navigate("/CreateStudent");
  };

  const updateStudent = (student) => {
    handleShow();
    setUpdatedStudent(student);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedStudent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const saveUpdatedStudent = () => {
    axios
      .put(`/update/${updatedStudent._id}`, updatedStudent)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  return (
    <>
      {/*.................... Rest of the code..............*/}
      <div>
        <div
          className="container d-flex justify-content-center"
          style={{ marginTop: "20px" }}
        >
          <div className="row ">
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className="p-3 rounded fs-6 text-white "
                style={{ backgroundColor: "#14A888", marginRight: "30px" }}
              >
                Total Students
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className="p-3 rounded fs-6 text-white "
                style={{ backgroundColor: "#0091E6" }}
              >
                Boy Students
              </button>
            </div>
            <div className="col-md-4 d-flex justify-content-around">
              <button
                className="p-3 rounded fs-6 text-white "
                style={{ backgroundColor: "#9768D9" }}
              >
                Girl Students
              </button>
            </div>
          </div>
        </div>
        {/*...........Dropdown........... */}

        <div style={{ marginTop: "50px" }}>
          <h3 style={{ borderBottom: "3px solid black" }}>Student List</h3>
         {/* Step 2: Add the select element */}
           <select
            style={styles.semesterDropdown}
            onChange={handleSemesterChange}
            value={selectedSemester}
          >
            {Array.from({ length: 9 }, (_, i) => i + 1).map((semester) => (
              <option key={semester} value={semester}>
                Semester {semester}
              </option>
            ))}
          </select>
        </div>
        <div
          className="d-flex justify-content-end align-item-end"
          style={{ marginTop: "5px" }}
        >
          <Button style={{ marginRight: "10px" }} onClick={() => goBack()}>
            Add Student{" "}
          </Button>
        </div>
        <Table style={{ marginTop: "10px", border: "1px solid black" }}>
          <thead>
            <tr className="text-center">
              <th>Name</th>
              {/* <th>Gender</th> */}
              <th>Roll</th>
              <th>Email</th>
              <th>Guardian Name</th>
              <th>Contact</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Step 4: Filter students based on selected semester */}
            {student
              .filter((student) => student.semester === selectedSemester)
              .map((student) => (
                <tr key={student._id} className="text-center">
                  <td>{student.Name} </td>
                  <td>{student.Roll} </td>
                  <td>{student.Email} </td>
                  <td>{student.GuardianName} </td>
                  <td>{student.Contact} </td>

                  <Button
                    variant="outline-success"
                    style={{ marginRight: "5px" }}
                    onClick={() => updateStudent(student)}
                  >
                    Edit
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => deleteStudent(student._id)}
                  >
                    Delete
                  </Button>
                </tr>
              ))}
          </tbody>
        </Table>
        <Modal style={{ marginLeft: "50px" }} show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Student</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <label htmlFor="name">Name of Student</label>
                <Form.Control
                  name="Name"
                  placeholder="Name of Student"
                  type="text"
                  value={updatedStudent.Name ? updatedStudent.Name : ""}
                  onChange={handleChange}
                />
                {/* <Form.Control
                name="Gender"
                placeholder="Gender"
                type="text"
                value={updatedStudent.Gender ? updatedStudent.Gender : ""}
                onChange={handleChange}
              /> */}
                <label htmlFor="rollno">Roll no.</label>
                <Form.Control
                  name="Roll"
                  placeholder="Roll number"
                  type="number"
                  value={updatedStudent.Roll ? updatedStudent.Roll : ""}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <Form.Control
                  name="Email"
                  placeholder="Email"
                  type="email"
                  value={updatedStudent.Email ? updatedStudent.Email : ""}
                  onChange={handleChange}
                />
                <label htmlFor="Guardian Name">Guardian Name</label>
                <Form.Control
                  name="GuardianName"
                  placeholder="Guardian Name"
                  value={
                    updatedStudent.GuardianName
                      ? updatedStudent.GuardianName
                      : ""
                  }
                  onChange={handleChange}
                />
                <label htmlFor="contact">Contact</label>
                <Form.Control
                  name="Contact"
                  placeholder="Contact"
                  type="number"
                  value={updatedStudent.Contact ? updatedStudent.Contact : ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={saveUpdatedStudent}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Students;
// Step 1: Define a CSS class for the semester dropdown
const styles = {
  semesterDropdown: {
    marginTop: "10px",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    boxShadow: " 0 2px 4px rgba(0, 0, 0, 0.2)",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#f9f9f9",
  },
};
