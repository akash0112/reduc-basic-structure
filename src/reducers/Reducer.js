import { ADD_USER } from "../actiontypes/actionTypes";
const initialState = {
  //Read
  users: [
    {
      id: 1, //:TODO uuid need to use
      name: "Dilip Prajapati",
      role: "Partner",
      created: "10/11/2019",
      status: "inactive",
    },
    {
      id: 2,
      name: "Sagar Valad",
      role: "Admin",
      created: "12/11/2019",
      status: "active",
    },
    {
      id: 3,
      name: "Tarak Mehta",
      role: "Partner",
      created: "12/11/2019",
      status: "active",
    },
  ],
};

const userreducer=(state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
      default:
      return state
    }
}
export default userreducer
  

  

 
   

