 
 import {UserContextProvider} from "./UserContext";
 import Routes from "./Routes";
import axios from  'axios';
function App() {
axios.defaults.baseURL='http://localhost:3000';  
axios.defaults.withCredentials= true; 

return (
  <UserContextProvider>
  <Routes />
</UserContextProvider>
  )
}

export default App
