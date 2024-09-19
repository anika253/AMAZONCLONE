import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

function Login() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numOfLaborers, setNumOfLaborers] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      // const db = app.firestre();

      const formData = {
        role,
        name,
        address,
        documentId,
        phoneNumber,
        numOfLaborers,
        employee_type: "contractor",
      };
      const formDataRef = collection(db, "employees");
      await addDoc(formDataRef, formData);
      // await db
      //   .collection("employees")
      //   .add(formData)
      //   .then((docRef) => {
      //     console.log("Document written with ID: ", docRef.id);
      //   })
      //   .catch((error) => {
      //     console.error("Error adding document: ", error);
      //   });

      console.log("Data saved successfully!");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for the Jobs!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Role selection */}
        <div>
          <div className="flex items-center">
            <input
              type="radio"
              id="individual"
              name="role"
              value="individual"
              checked={role === "individual"}
              onChange={handleRoleChange}
              className="mr-2"
            />
            <label htmlFor="individual" className="mr-4">
              Individual
            </label>
            <input
              type="radio"
              id="contractor"
              name="role"
              value="contractor"
              checked={role === "contractor"}
              onChange={handleRoleChange}
              className="mr-2"
            />
            <label htmlFor="contractor">Contractor</label>
          </div>
        </div>
        {/* Number of laborers input */}
        {role === "contractor" && (
          <div>
            <label htmlFor="numOfLaborers" className="block mb-2">
              Number of Laborers:
            </label>
            <input
              type="number"
              id="numOfLaborers"
              name="numOfLaborers"
              value={numOfLaborers}
              onChange={(e) => setNumOfLaborers(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        )}
        {/* Name input */}
        <div>
          <label htmlFor="name" className="block mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Address input */}
        <div>
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Document ID selection */}
        <label htmlFor="documentId">Choose Your Document ID:</label>
        <select
          id="documentId"
          name="documentId"
          value={documentId}
          onChange={(e) => setDocumentId(e.target.value)}
          required
        >
          <option value="">Select Document Type</option>
          <option value="AADHAR CARD">AADHAR CARD</option>
          <option value="DRIVING LICENSE">DRIVING LICENSE</option>
          <option value="RATION CARD">RATION CARD</option>
        </select>
        {/* Phone number input */}
        <div>
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          // disabled={!role}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
