import { useEffect, useState } from "react";
import { getAxiosInstance } from "../utils/axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Score = () => {
  const ai = getAxiosInstance();
  const token = useSelector((state) => state.token);
  const [score, setScore] = useState(0);
  useEffect(() => {
    ai({
      method: "GET",
      url: "/referral/getReferralPoints",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        setScore(res.data.points);
      })
      .catch(() => toast("Error fetching points"));
  }, []);

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>
        <span>Your referral points : &nbsp;</span>
        <span style={{ color: "green" }}>{score}</span>{" "}
      </h3>
    </div>
  );
};

export default Score;
