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

  const response = await axios.get(`${API_URL}`, config);
  // alert("Users successfully retrieved");
  const contactsFromDb = response.data;

  return contactsFromDb;
}

// Delete Contact
const deleteContact = async (user, contactId) => {
  console.log(user, contactId);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.delete(
      `${API_URL}/${contactId}`,

      config
    );

    if (response.data) {
      alert("Contact successfully deleted");
    } else {
      false;
    }
  } catch (e) {
    alert("unable to delete account :", e);
  }
};

const getContactById = async (user, contactId) => {
  console.log(user, contactId);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
  try {
    const response = await axios.get(
      `${API_URL}/${contactId}`,

      config
    );
    const contact = response.data;
    return contact;
  } catch (e) {
    alert("unable to fetch contact :", e);
  }
};
export {
  createContact,
  updateContact,
  getcontacts,
  deleteContact,
  getContactById,
};
