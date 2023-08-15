import { React, useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ShelterList from "../components/ShelterList";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS } from "../utils/queries";

function AllShelters() {
  const [filters, setFilters] = useState({});

  console.log(filters);

  const { loading, error, data } = useQuery(GET_SHELTERS, {
    variables: {
      filters: filters, // Pass your filters object here
    },
  });

  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    if (data) {
      setShelters(data.shelters);
    }
  }, [data, filters]);

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <ShelterList shelters={shelters} filters={filters} />
    </div>
  );
}

export default AllShelters;
