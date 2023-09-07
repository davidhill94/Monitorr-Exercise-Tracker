import axios from "axios";

//Retrieves acitivities and users lists from backend database and sets state to data retrieved
export const handleActivitiesLoad = async (setActivities, setUsers) => {
    //Activities data retrieval 
    await axios.get("http://localhost:5000/activity/")
      .then(res => {
        if (res.data.length > 0) {
          setActivities(res.data.map(act => act.activity));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
    //Users data retrieval
    await axios.get("http://localhost:5000/users/")
      .then(res => {
        if (res.data.length > 0) {
          setUsers(res.data.map(user => user.username));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
  }