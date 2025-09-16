import { useState } from "react";

export default function Contact() {
    
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    course: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2)); // shows submitted data
  };

  return (

  <div style={{ 
      position: "absolute", 
      top: "50%", 
      left: "50%", 
      transform: "translate(-50%, -50%)" 
    }}>
    <div style={{ maxWidth: "400px", width: "100%" }}>
      <h2>Contact / Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        {/* Qualification */}
        <label>
          Qualification:
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        {/* Interested Course */}
        <p>Interested Course:</p>
        <label>
          <input
            type="radio"
            name="course"
            value="CSE"
            checked={formData.course === "CSE"}
            onChange={handleChange}
          />
          CSE
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="course"
            value="Data Science"
            checked={formData.course === "Data Science"}
            onChange={handleChange}
          />
          Data Science
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="course"
            value="AI/ML"
            checked={formData.course === "AI/ML"}
            onChange={handleChange}
          />
          AI / ML
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="course"
            value="Civil"
            checked={formData.course === "Civil"}
            onChange={handleChange}
          />
          Civil
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="course"
            value="ECE"
            checked={formData.course === "ECE"}
            onChange={handleChange}
          />
          ECE
        </label>
        <br /><br />

        {/* Email */}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        {/* Contact Number */}
        <label>
          Contact Number:
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
);
}
