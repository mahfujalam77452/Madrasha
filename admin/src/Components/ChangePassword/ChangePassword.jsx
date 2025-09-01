import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ChangePassword.css';

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    email: '', // Using email field here
    password: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // Renamed to successMessage
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, newPassword, confirmPassword } = formData; // Use email here

    if (!email || !password || !newPassword || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New password and confirm password do not match.');
      return;
    }

    setError(''); // Clear error message

    // API request to change password (assuming endpoint is different)
    fetch('http://localhost:8080/api/v1/admin/changepassword', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(formData), // Sending the formData for the password change request
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          setSuccessMessage('Password Changed Successfully'); // Show success message
          setTimeout(() => {
            navigate('/login'); // Redirect to login page after success
          }, 2000); // Delay for 2 seconds before redirect
        } else {
          alert(data.message); // Show error message from server response
        }
      })
      .catch((error) => {
        alert(error.message); // Handle any network or API errors
      });
  };

  return (
    <div className='change-password-container'>
      <div className='change-password-form'>
        {successMessage && <div className="success-message">{successMessage}</div>} {/* Show success message */}
        <h2>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email" // Changed input type to email for better UX
            name="email"
            placeholder="Email"
            value={formData.email} // Using formData.email
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Current Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
          {error && <p className="error">{error}</p>} {/* Show error message */}
          <button type="submit">Change Password</button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
