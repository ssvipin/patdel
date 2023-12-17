import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import NotFound from "../NotFound";
import "../parent.css";
const UserDashboard = ({}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [uid, setUid] = useState("");
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("vipin", uid);
        setDisplayName(user.displayName);
        setPhotoURL(user.photoURL);
        setEmail(user.email);

        setUid(user.uid);
        setLoading(false);
      } else {
        setDisplayName("");
        setPhotoURL("");
        setUid("");

        // User is signed out
        // ...
      }
    });
  }, []);
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    // setEditedUsername(username); // Reset the edited username if canceled
  };

  const handleSave = () => {
    setIsEditing(false);
  };
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  } else if (uid) {
    return (
      <div
        style={{
          border: "1px solid red",
          padding: "12px 16px",
        }}
      >
        <div
          style={{
            border: "1px solid red",
            padding: "20px",
          }}
        >
          <h2>User Dashboard</h2>
          <div>
            <label>Username:</label>
            {isEditing ? (
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            ) : (
              <span>{displayName}</span>
            )}
          </div>
          <div>
            <label>Email:</label>
            <span>{email}</span>
          </div>
          <div>
            <label>Photo URL:</label>
            <img
              src={photoURL}
              alt="User"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
        </div>
        <div
          style={{
            border: "1px solid red",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          {isEditing ? (
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancelEdit}>Cancel</button>
            </div>
          ) : (
            <button onClick={handleEdit}>Edit</button>
          )}
          <button onClick={() => console.log("Close button clicked")}>
            Close
          </button>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
};

export default UserDashboard;
