import { combineReducers } from "redux"
import userreducer from './Reducer'
const rootreducer=combineReducers({
   user:userreducer
})
export default rootreducer