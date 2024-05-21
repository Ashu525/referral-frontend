import { Apple, Google, Twitter } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAxiosInstance } from "../utils/axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setReferral } from "../store/slices/referralCodeSlice";

const Register = () => {
  const ai = getAxiosInstance();
  const { code } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (code) {
      ai({
        method: "GET",
        url: `/referral/verify/${code}`,
      })
        .then(() => {
          dispatch(setReferral(code));
        })
        .catch(() => {
          toast("Referral code Invalid", { type: "error" });
        });
    }
  }, []);

  const handleTwitterAuth = () => {};

  const handleAppleAuth = () => {};

  const handleGoogleAuth = () => {
    window.open(
      "https://referral-backend-7osf.onrender.com/auth/google-login",
      "_self"
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login / Signup</h1>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {/* <Button
          variant="outlined"
          startIcon={
            <Twitter color="primary" onClick={handleTwitterAuth}></Twitter>
          }
        >
          Twitter
        </Button> */}

        <Button
          onClick={handleGoogleAuth}
          variant="outlined"
          startIcon={<Google color="primary"></Google>}
        >
          Google
        </Button>
        {/* <Button
          variant="outlined"
          startIcon={<Apple color="primary" onClick={handleAppleAuth}></Apple>}
        >
          Apple
        </Button> */}
      </div>
    </div>
  );
};

export default Register;
