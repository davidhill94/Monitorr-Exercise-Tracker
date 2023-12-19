import axios from "axios";
import { mockActivityData } from "../../../Mock Data/MockActivities";
import { mockUsersData } from "../../../Mock Data/MockUsers";

//Retrieves acitivities and users lists from backend database and sets state to data retrieved
export const handleActivitiesLoad = async (setActivities, setUsers) => {
    //Activities data retrieval 
    //*** TO REMOVE MOCK DATA - Remove mockActivities variable and setActivities(res.data.map.....) ***//
    await axios.get("http://localhost:5000/activity/")
      .then(res => {
        const mockActivities = [...res.data, ...mockActivityData]
        if (res.data.length > 0) {
          setActivities(mockActivities.map(act => act.activity));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
    //Users data retrieval
    //*** TO REMOVE MOCK DATA - Remove mockUsers variable and setUsers(res.data.map.....) ***//
    await axios.get("http://localhost:5000/users/")
      .then(res => {
        const mockUsers = [...res.data, ...mockUsersData]
        if (res.data.length > 0) {
          setUsers(mockUsers.map(user => user.username));
        }
      })
      .catch((error) => {
        console.log('error: ' + error);
      })
  }