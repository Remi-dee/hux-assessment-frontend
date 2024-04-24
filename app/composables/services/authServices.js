import axios from "axios";

const API_URL = "https://hux-contact-management.onrender.com/users";

// Register user
const createUser = async (userData) => {
  try {
    const response = await axios.post(API_URL, userData);

    if (typeof window !== "undefined" && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    } else {
      false;
    }
    if (response.data) {
      alert("You've successfully signed in");
      return response.data;
    } else {
      return false;
    }
  } catch (error) {
    alert("Unable to create user: " + error.message);
  }
};

// Login user
const loginUser = async (userData) => {
  console.log(API_URL + "login");
  const response = await axios.post(API_URL + "/login", userData);
  try {
    if (typeof window !== "undefined" && response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      return true;
    }
  } catch (e) {
    alert("unable to login :", e.message);
    return {
      message: `unable to login : ${e.response.message}`,
      loading: false,
    };
  }
};

// Get Users
async function getUsers(token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const { data } = await axios.get(`${API_URL}/allUsers`, config);
  // alert("Users successfully retrieved");
  const usersFromDb = data;

  return usersFromDb;
}

// Logout user
const logout = () => {
  if (typeof window !== "undefined" && response.data) {
    localStorage.removeItem("user");
  } else {
    false;
  }
};

export { createUser, logout, loginUser, getUsers };
