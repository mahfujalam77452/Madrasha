import React, { useEffect, useState } from 'react';
import './AddExamName.css';
import toast from 'react-hot-toast';

const AddExamName = () => {
    const [examName, setExamName] = useState("");
    const [examNameList, setExamNameList] = useState([]);
    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        async function fetchExamNames() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/admin/getexamname', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    console.warn(`Failed to fetch examNames: ${response.statusText}`);
                    return;
                }

                const data = await response.json();
                if (data.data) {
                    setExamNameList(data.data);
                } else {
                    console.warn(`No data received for examNames`);
                }
            } catch (error) {
                console.error(`Error fetching examNames:`, error);
                alert(`Error fetching examNamess`);
            }
        }

        fetchExamNames();
    }, [examNameList]);

    function handleChange(e) {
        setExamName(e.target.value);
    }

    function handleClick() {
        fetch('http://localhost:8080/api/v1/admin/addexamname', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ examName })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setExamNameList([...examNameList, { examName }]);
                toast.success("ExamName added successfully!", {
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
                setExamName(""); // Clear input after successful addition
            } else {
                alert("Failed to add ExamName: " + data.message);
            }
        })
        .catch(error => {
            alert("Error adding ExamName: " + error.message);
        });
    }

    function handleDelete(_id) {
        fetch(`http://localhost:8080/api/v1/admin/deleteexamname/${_id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setExamNameList(examNameList.filter(item => item._id !== _id));
                toast.success("ExamName deleted successfully!", {
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
                alert("Failed to delete ExamName: " + data.message);
            }
        })
        .catch(error => {
            alert("Error deleting ExamName: " + error.message);
        });
    }

    return (
        <div className='addExamName'>
            <div className="addExamName-add">
                <div className="input-ExamName">
                    <p>ExamName :</p>
                    <input type="text" name="ExamName" value={examName} onChange={handleChange} />
                </div>
                <div className="input-button">
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
            <div className="addExamName-list">
                {
                    examNameList.map((item, index) => (
                        <div className="categories" key={index}>
                            <div className="ExamName-name">{item.examName}</div>
                            <div className="delete-ExamName">
                                <p className='delete-ExamName-icon' onClick={() => handleDelete(item._id)}>+</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AddExamName;
