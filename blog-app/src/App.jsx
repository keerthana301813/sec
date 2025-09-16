// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import {Link} from 'react-router-dom';
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <BrowserRouter>
//     <Routes>
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/about" element={<About/>}/>
//         <Route path="/contact" element={<Contact/>}/>
        
//     </Routes>
    
//     <nav>
//         <Link to="/home">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//     </nav>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//      </BrowserRouter>
// </>
// )}

// export default App


// import { useState } from "react";

// function Form() {
//   const [formData, setFormData] = useState({
//     name: "",
//     qualification: "",
//     course: "",
//     email: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(formData, null, 2)); // just to show output
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "auto" }}>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br /><br />

//         {/* Qualification */}
//         <label>
//           Qualification:
//           <input
//             type="text"
//             name="qualification"
//             value={formData.qualification}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br /><br />

//         {/* Interested Course - Radio Buttons */}
//         <p>Interested Course:</p>
//         <label>
//           <input
//             type="radio"
//             name="course"
//             value="Web Development"
//             checked={formData.course === "Web Development"}
//             onChange={handleChange}
//           />
//           Web Development
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="course"
//             value="Data Science"
//             checked={formData.course === "Data Science"}
//             onChange={handleChange}
//           />
//           Data Science
//         </label>
//         <br />
//         <label>
//           <input
//             type="radio"
//             name="course"
//             value="AI/ML"
//             checked={formData.course === "AI/ML"}
//             onChange={handleChange}
//           />
//           AI / ML
//         </label>
//         <br /><br />

//         {/* Email */}
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br /><br />

//         {/* Contact Number */}
//         <label>
//           Contact Number:
//           <input
//             type="tel"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Form;















import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";

import  Contact from "./Pages/Contact"; 

function App() {
  return (
    <BrowserRouter>
    
      <nav style={{ 
  backgroundColor: "black", 
  padding: "15px", 
  display: "flex", 
  justifyContent: "center", 
  gap: "40px",
  position: "fixed",   // ✅ keeps it stuck to the top
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1000
}}>
  <Link to="/home" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Home</Link>
  <Link to="/about" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>About</Link>
  <Link to="/contact" style={{ color: "white", textDecoration: "none", fontSize: "18px" }}>Contact</Link>
</nav>



      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* form shows here */}
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

