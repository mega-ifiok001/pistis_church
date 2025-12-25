import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/pistis_logo.avif";
import welcomeImg from "../assets/welcome.jpg";
import bg_main from "../assets/page_bg.jpg";

const VisitorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    invitedBy: "",
    howDidYouKnow: "",
    whatsapp: "",
    email: "",
    dateJoined: "",
    visitCount: "",
    serviceAttended: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully 🎉");
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-screen bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT IMAGE SECTION (FIXED) */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="hidden md:block h-screen"
        >
          <img
            src={welcomeImg}
            alt="Welcome"
            className="w-full h-[100%] object-fit"
          />
        </motion.div>

        {/* RIGHT FORM SECTION (SCROLLABLE) */}
        <div className="flex justify-center w-full items-center relative">
            <img src={bg_main} className="absolute inset-0 w-full h-full object-cover z-0" alt="" />
              <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="h-screen overflow-y-auto w-full  p-8 md:p-10 z-0 scroll-smooth"
        >
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img src={logo}  alt="Logo" className="W-50  px-3 rounded-4xl " />
          </div>

          <h3 className="text-2xl font-bold text-center text-[#fff] mb-6">
            Please let us know you better!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input className="!text-white shadow-2xl p-2" label="Full Name" name="fullName" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="Phone Number" name="phone" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="Address" name="address" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="Who invited you? (Optional)" name="invitedBy" onChange={handleChange} />
            <Input className="text-white shadow-2xl p-2" label="How did you know about us?" name="howDidYouKnow" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="WhatsApp Number" name="whatsapp" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="Email" name="email" type="email" onChange={handleChange} required />
            <Input className="text-white shadow-2xl p-2" label="Date Joined (Optional)" name="dateJoined" type="date" onChange={handleChange} />

            {/* Visit Count */}
            <div>
              <label className="block text-sm font-medium text-[#3f1169] mb-1">
                Visit Count
              </label>
              <select
                name="visitCount"
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fff] text-white   outline-none"
              >
                <option className="!text-black" value="">Select one</option>
                <option className="!text-black"  value="first">First Timer</option>
                <option className="!text-black" value="second">Second Timer</option>
                <option className="!text-black" value="third">Third Timer</option>
              </select>
            </div>

            <Input
              label="Service Attended (Optional)"
              name="serviceAttended"
              onChange={handleChange}
            />

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#fff] text-[#3f1169] font-bold cursor py-3 rounded-lg shadow-lg"
            >
              Submit
            </motion.button>
       </form>
        </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Input = ({ label, name, type = "text", onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-[#fff] mb-1 ml-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      onChange={onChange}
      required={required}
      className="w-full shadow-2xl border border-white text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#fff] outline-none transition"
    />
  </div>
);

export default VisitorForm;
