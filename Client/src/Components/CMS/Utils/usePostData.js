import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const { API_TEST_URL } = process.env;

const usePostData = (tigger, link, data, type) => {
  const [status, setStatus] = useState([]);
  useEffect(() => {
    if (type === "career" && tigger == true) {
      axios
        .post(API_TEST_URL + "api/v1/" + link, data)
        .then((response) => {
          if (response.status === 201) {
            toast("Registration Successful... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            toast.error("Registration Failed... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        })
        .catch((error) => console.log(error));
    }
  }, [tigger]);

  return status;
};

export { usePostData };
