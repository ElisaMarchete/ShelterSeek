import { React, useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ShelterList from "../components/ShelterList";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS } from "../utils/queries";

function Shelters() {
  const [filters, setFilters] = useState({});

  const { loading, error, data } = useQuery(GET_SHELTERS, {
    variables: {
      filters: filters,
    },
  });

  const [shelters, setShelters] = useState([]);

  useEffect(() => {
    if (data) {
      setShelters(data.shelters);
      console.log(data.shelters);
    }
  }, [data, filters]);

  return (
    <div>
      <FilterBar filters={filters} setFilters={setFilters} />
      <ShelterList shelters={shelters} />
    </div>
  );
}

export default Shelters;
