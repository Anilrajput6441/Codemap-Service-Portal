import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const { API_TEST_URL, API_TEST_URL1 } = process.env;

const usePostDataMain = (tigger, link, data, type) => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    if (tigger == true) {
      axios
        .post(API_TEST_URL + "api/v1/" + link, data)
        .then((response) => {
          if (response.status === 200) {
            toast("Message sent successfully... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setStatus("200 " + Math.floor(Math.random() * 100));
          } else {
            toast.error("Failed... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setStatus("500" + Math.floor(Math.random() * 100));
          }
        })
        .catch((error) => console.log(error));
    }
  }, [tigger]);

  return status;
};

export { usePostDataMain };
