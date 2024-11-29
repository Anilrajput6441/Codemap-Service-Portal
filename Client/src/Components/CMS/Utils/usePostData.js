import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const { API_TEST_URL, API_TEST_URL1 } = process.env;

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

    if (type === "technologies" && tigger === true) {
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      axios
        .post(API_TEST_URL + "api/v1/" + link, data, config)
        .then((res) => {
          if (res.status === 200) {
            toast("Upload Successful... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setStatus("200" + Math.floor(Math.random() * 100));
          } else {
            toast.error("Upload not Successful... ", {
              position: toast.POSITION.TOP_RIGHT,
            });
            setStatus("500" + Math.floor(Math.random() * 100));
          }
        })
        .catch((err) => {
          console.log(err);
        });

      //Change and Generate a unique status value for each call to manage continous Post of Data
    }
  }, [tigger]);

  return status;
};

export { usePostData };
