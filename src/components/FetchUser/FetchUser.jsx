import { useEffect } from "react";

const fetchUsers = () => {
  // Where we're fetching data from
  return (
    fetch("http://www.abc.cd/test")
      // We get the API response and receive data in JSON format
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
  );
};
