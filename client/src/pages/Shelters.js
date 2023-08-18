import { React, useEffect, useState } from "react";
import FilterBar from "../components/FilterBar";
import ShelterList from "../components/ShelterList";
import Divider from "@mui/material/Divider";
import { useQuery } from "@apollo/client";
import { GET_SHELTERS } from "../utils/queries";

function Shelters() {
  const [filters, setFilters] = useState({});

  const { data } = useQuery(GET_SHELTERS, {
    variables: {
      filters: filters,
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
      <FilterBar filters={filters} setFilters={setFilters} key={shelters._id} />
      <Divider />
      <ShelterList shelters={shelters} />
    </div>
  );
}

export default Shelters;
