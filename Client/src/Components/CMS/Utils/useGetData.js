import axios from "axios";
import { useEffect, useState } from "react";

const { API_TEST_URL } = process.env;
const userGetData = (tigger, url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    if (tigger == true) {
      axios
        .get(API_TEST_URL + "api/v1/" + url)
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [tigger]);

  return data;
};

export { userGetData };
