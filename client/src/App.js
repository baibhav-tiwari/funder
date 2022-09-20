// import React, { useEffect, useState } from 'react'
// function App() {
//   const [backendData, setBackendData] = useState([{}])
//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//         setBackendData(data)
//       }
//     )
//   }, [])


//   return (
//     <div>
//       {(typeof backendData.users === 'undefined') ? (
//         <p>loading</p>
//       ) : (
//         backendData.users.map((user, i) => (
//           <p key={i}>{user}</p>
//         ))
//       )}

//     </div>

//   )

// }
// export default App
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SignupPage from './pages/Signup';
import LoginPage from './pages/Login';

function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;