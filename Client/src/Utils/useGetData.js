import axios from "axios";
import { useEffect, useState } from "react";

const { API_TEST_URL, API_TEST_URL1 } = process.env;
const userGetData = (tigger, url, type) => {
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
    } else if (tigger != false && type === "technologies") {
      axios
        .get(API_TEST_URL1 + "api/v1/" + url + "/" + "data?category=" + tigger)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [tigger]);

  return data;
};

export { userGetData };
