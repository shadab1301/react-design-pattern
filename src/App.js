import logo from './logo.svg';
import './App.css';
import EnhancedUserList from './Components/HOC/userList';
import EnhancedTodosList from './Components/HOC/TodosList';

function App() {
  return (
    <div style={{margin:"20px 200px",display:"flex"}}>
      <div style={{margin:"0px 20px"}}>  <EnhancedUserList/> </div>
      <div style={{margin:"0px 20px"}}>  <EnhancedTodosList/> </div>
    </div>
  );
}

export default App;
