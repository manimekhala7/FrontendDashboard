import React from "react";
import { useParams } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Job Detail</h1>
      <p>Job ID: {id}</p>
    </div>
  );
}

export default JobDetail;


