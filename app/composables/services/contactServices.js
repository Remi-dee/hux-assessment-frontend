import axios from "axios";

const API_URL = "https://hux-contact-management.onrender.com/contacts";

// Create contact
const createContact = async (userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(API_URL, userData, config);

    if (response.data) {
      console.log(response.data);
      alert("Contact successfully created");
    } else {
      false;
    }
  } catch (error) {
    alert("Unable to create contact: " + error.message);
  }
};

// Update Contact
const updateContact = async (userData, user, contactId) => {
  console.log(user, contactId);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.put(
      `${API_URL}/${contactId}`,
      userData,
      config
    );

    if (response.data) {
      console.log(response.data);
      alert("Contact successfully updated");
    } else {
      false;
    }
  } catch (e) {
    alert("unable to update account :", e);
  }
};

// Get Users
async function getcontacts(token) {
  console.log("our token is", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const data = await axios.get(`${API_URL}`, config);
  // alert("Users successfully retrieved");
  const contactsFromDb = data.data;

  return contactsFromDb;
}

// Logout user
const logout = () => {
  if (typeof window !== "undefined" && response.data) {
    localStorage.removeItem("user");
  } else {
    false;
  }
};

export { createContact, updateContact, getcontacts };
