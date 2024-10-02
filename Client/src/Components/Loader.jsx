import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import Index from "./Index";

const Loader = () => {
  const [body, setBody] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setBody(true);
    }, 1500);
  }, []);
  return (
    <div>
      {!body && (
        <div className="holder w-[100vw] h-[100vh] flex justify-center items-center bg-backgroundMain">
          {screen.width < 1000 ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="35px" />
            </Box>
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress size="90px" />
            </Box>
          )}
        </div>
      )}

      {body && <Index />}
    </div>
  );
};
export default Loader;
