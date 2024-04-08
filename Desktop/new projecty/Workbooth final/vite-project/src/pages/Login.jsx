import React, { useState } from "react";

function Login() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [documentId, setDocumentId] = useState("");
  const [numOfLaborers, setNumOfLaborers] = useState("");
  console.log("---------------------------------------------------------");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    // Reset other form fields when switching roles
    setName("");
    setAddress("");
    setDocumentId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", {
      role,
      name,
      address,
      documentId,
      numOfLaborers,
    });
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Apply for the Jobs!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <div>
          <label htmlFor="address" className="block mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="proper address for work location"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="work location"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <label for="pincode" class="block mb-2">
          PIN code:
        </label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          class="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />

        <label for="documentId">Choose Your Document ID:</label>
        <select id="documentId" name="documentId" required>
          <option value="">Select Document Type</option>
          <option value="AADHAR CARD">AADHAR CARD</option>
          <option value="DRIVING LICENSE">DRIVING LICENSE</option>
          <option value="RATION CARD">RATION CARD</option>
        </select>
        <div>
          <label htmlFor="documentId" className="block mb-2">
            Document ID NUMBER:
          </label>
          <input
            type="text"
            id="documentId"
            name="documentId"
            value={documentId}
            onChange={(e) => setDocumentId(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={!role}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Login;
