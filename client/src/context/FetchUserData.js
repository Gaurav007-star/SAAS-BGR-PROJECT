import axios from "axios";

const FetchUserFromBackend = async (id) => {
  try {
    const response = await axios.get(`http://localhost:7000/api/user/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user data from backend:", error);
    return null;
  }
};

export default FetchUserFromBackend