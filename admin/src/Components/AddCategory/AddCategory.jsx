import React, { useEffect, useState } from 'react';
import './AddCategory.css';
import toast from 'react-hot-toast';

const AddCategory = () => {
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    const jwtToken = localStorage.getItem('jwtToken');

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('http://localhost:8080/api/v1/admin/getcategory', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });

                if (!response.ok) {
                    console.warn(`Failed to fetch categories: ${response.statusText}`);
                    return;
                }

                const data = await response.json();
                if (data.data) {
                    setCategoryList(data.data);
                } else {
                    console.warn(`No data received for categories`);
                }
            } catch (error) {
                console.error(`Error fetching categories:`, error);
                alert(`Error fetching categories`);
            }
        }

        fetchCategories();
    }, [categoryList]);

    function handleChange(e) {
        setCategory(e.target.value);
    }

    function handleClick() {
        fetch('http://localhost:8080/api/v1/admin/addcategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`
            },
            body: JSON.stringify({ category })
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setCategoryList([...categoryList, { category }]);
                toast.success("Category added successfully!", {
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
                setCategory(""); // Clear input after successful addition
            } else {
                alert("Failed to add category: " + data.message);
            }
        })
        .catch(error => {
            alert("Error adding category: " + error.message);
        });
    }

    function handleDelete(_id) {
        fetch(`http://localhost:8080/api/v1/admin/deletecategory/${_id}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${jwtToken}` },
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "success") {
                setCategoryList(categoryList.filter(item => item._id !== _id));
                toast.success("Category deleted successfully!", {
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
                alert("Failed to delete category: " + data.message);
            }
        })
        .catch(error => {
            alert("Error deleting category: " + error.message);
        });
    }

    return (
        <div className='addcategory'>
            <div className="addcategory-add">
                <div className="input-category">
                    <p>Category :</p>
                    <input type="text" name="category" value={category} onChange={handleChange} />
                </div>
                <div className="input-button">
                    <button onClick={handleClick}>Add</button>
                </div>
            </div>
            <div className="addcategory-list">
                {
                    categoryList.map((item, index) => (
                        <div className="categories" key={index}>
                            <div className="category-name">{item.category}</div>
                            <div className="delete-category">
                                <p className='delete-category-icon' onClick={() => handleDelete(item._id)}>+</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default AddCategory;
