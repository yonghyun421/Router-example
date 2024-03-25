import React from "react";
import { useSearchParams } from "react-router-dom";

const Productpage = () => {
  let [query, setQuery] = useSearchParams();

  return <div>Productpage</div>;
};

export default Productpage;
