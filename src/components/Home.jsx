/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@mui/material";
import { getAxiosInstance } from "../utils/axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { clearReferral } from "../store/slices/referralCodeSlice";
import { useDispatch, useSelector } from "react-redux";
import Score from "./Score";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const ai = getAxiosInstance();
  const token = useSelector((state) => state.token);
  const referralCode = useSelector((state) => state.referralCode);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  navigate(location.pathname, { replace: true });

  useEffect(() => {
    if (referralCode)
      ai({
        method: "GET",
        url: `/referral/updateRefereePoints/${referralCode}`,
        headers: { Authorization: token },
      }).finally(() => {
        dispatch(clearReferral);
      });
  }, []);

  const handleGenerateReferral = () => {
    ai({
      method: "POST",
      url: "/referral/generate",
      headers: {
        Authorization: token,
      },
    }).then((res) => {
      toast("Referral link copied to clipboard");
      navigator.clipboard.writeText(
        `https://main--react-referral-system.netlify.app/referral/${res.data.referralCode.code}`
      );
    });
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Home</h1>
        <Button
          style={{
            borderRadius: "20px",
            boxShadow: "0 0 10px black",
          }}
          variant="contained"
          color="secondary"
          onClick={handleGenerateReferral}
        >
          Generate Referral
        </Button>
      </div>
      <Score />
    </>
  );
};

export default Home;
