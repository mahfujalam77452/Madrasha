import React, { useEffect, useState } from 'react';
import './AddDepartment.css';
import toast from 'react-hot-toast';

const AddDepartment = () => {
    const [department, setDepartment] = useState("");
    const [departmentList, setDepartmentList] = useState([]);
    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        async function fetchDepartments() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/admin/getdepartment', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    console.warn(`Failed to fetch department: ${response.statusText}`);
                    return;
                }

                const data = await response.json();
                if (data.data) {
                    setDepartmentList(data.data);
                } else {
                    console.warn(`No data received for department`);
                }
            } catch (error) {
                console.error(`Error fetching department:`, error);
                alert(`Error fetching department`);
            }
        }

        fetchDepartments();
    }, [departmentList]);

    function handleChange(e) {
        setDepartment(e.target.value);
    }

    function handleClick() {
        fetch('http://localhost:8080/api/v1/admin/adddepartment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ department })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setDepartmentList([...departmentList, { department }]);
                toast.success("Department added successfully!", {
                    duration: 2000,
                    position: "center-top",
                    style: {
                        background: "#4CAF50",
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                    }
                });
                setDepartment(""); // Clear input after successful addition
            } else {
                alert("Failed to add department: " + data.message);
            }
        })
        .catch(error => {
            alert("Error adding department: " + error.message);
        });
    }

    function handleDelete(_id) {
        fetch(`http://localhost:8080/api/v1/admin/deletedepartment/${_id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setDepartmentList(departmentList.filter(item => item._id !== _id));
                toast.success("Department deleted successfully!", {
                    duration: 2000,
                    position: "center-top",
                    style: {
                        background: "#4CAF50",
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "8px",
                        padding: "12px 16px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)"
                    }
                });
            } else {
                alert("Failed to delete department: " + data.message);
            }
        })
        .catch(error => {
            alert("Error deleting department: " + error.message);
        });
    }

    return (
        <div className='adddepartment'>
            <div className="adddepartment-add">
                <div className="input-department">
                    <p>Department :</p>
                    <input type="text" name="department" value={department} onChange={handleChange} />
                </div>
                <div className="input-button">
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
            <div className="adddepartment-list">
                {
                    departmentList.map((item, index) => (
                        <div className="departments" key={index}>
                            <div className="department-name">{item.department}</div>
                            <div className="delete-department">
                                <p className='delete-department-icon' onClick={() => handleDelete(item._id)}>+</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AddDepartment;
