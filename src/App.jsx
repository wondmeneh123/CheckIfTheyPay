import React, { useState, useEffect } from "react";
import Auth from "./Auth";
import Header from "./Header";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser)); // Restore user from localStorage
    }
  }, []);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <Header user={user} onLogout={handleLogout} />
      {!user ? (
        <Auth onLogin={handleLogin} />
      ) : (
        <p className="p-4">Welcome to the app!</p>
      )}
    </div>
  );
};

export default App;
