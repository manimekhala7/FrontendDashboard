import { useParams } from "react-router-dom";

const RegistrationDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1 style={{ color: "#2d3748" }}>Registration Detail Page</h1>
      <p style={{ fontSize: "18px", marginTop: "10px" }}>
        You are viewing details for <strong>User ID: {id}</strong>
      </p>
    </div>
  );
};

export default RegistrationDetail;
