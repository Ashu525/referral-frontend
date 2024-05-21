import { useState } from "react";

export const useTokenStore = () => {
  const [updatedToken, setToken] = useState(null);
  const updateToken = (newToken) => {
    setToken(newToken);
  };
  return { updatedToken, updateToken };
};
