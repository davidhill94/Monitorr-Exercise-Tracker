import axios from "axios";
import { mockActivityData } from "../../../Mock Data/MockActivities";
import { mockUsersData } from "../../../Mock Data/MockUsers";

//Retrieves acitivities and users lists from backend database and sets state to data retrieved
export const handleActivitiesLoad = async (setActivities, setUsers, mockData) => {
  //Sets state to mock data when mockData state is true
  if (mockData === true) {
    if (mockActivityData.length > 0) {
      setActivities(mockActivityData.map(act => act.activity));
    }
    if (mockUsersData.length > 0) {
      setUsers(mockUsersData.map(user => user.username));
    }
  } else {
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
}