import React from "react";
import ShelterCard from "./ShelterCard";

function ShelterList({ shelters }) {
  return (
    <div className="ShelterList">
      <h2>List of Shelters</h2>
      <div className="shelters-section">
        {shelters.map((shelter) => {
          return <ShelterCard shelter={shelter} key={shelter._id} />;
        })}
      </div>
    </div>
  );
}

export default ShelterList;
