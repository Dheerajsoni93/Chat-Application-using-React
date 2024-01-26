import{Routes, Route, Navigate} from 'react-router-dom'
import Chat from './pages/chat';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return <>
  <Routes>
    <Route path="/" element={<Chat/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="*" element={<Navigate to="/"/>}></Route>
  </Routes>



  </>;
}

export default App
