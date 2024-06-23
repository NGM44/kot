import { jwtDecode } from "jwt-decode";
import { useAuthStore } from "../store/useAuthStore";

export function revalidateAuth() {
  if (!checkTokenValidity()) {
    useAuthStore.setState((store) => ({ ...store, isAuthenticated: false }));
  }
}

export function checkTokenValidity() {
  const CLOCK_SKEW_MARGIN = 1000 * 60 * 5; // 5 minutes
  const token = localStorage.getItem("accesstoken");
  if (!token) return true;
  const decodedToken = decodeAuthToken(token);
  const currentDate = new Date();
  if (decodedToken.exp * 1000 - currentDate.getTime() < CLOCK_SKEW_MARGIN)
    return false;
  return true;
}

export function decodeAuthToken(accesstoken: string) {
  const decodedToken = jwtDecode(accesstoken) as {
    xUserToken: string;
    exp: number;
    id: string;
    role:string;
    email: string;
  };
  return decodedToken;
}

export function useClearCredentials() {
  const credentialKeys = ["accesstoken", "id"];
  credentialKeys.forEach((key) => {
    localStorage.removeItem(key);
  });
  useAuthStore().clear();
}