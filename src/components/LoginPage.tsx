import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
  const authStatus = useAuthStore((state) => state.status);
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    setTimeout(() => {
      logout();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (authStatus === "checking") {
    return <h3>Checking...</h3>;
  }
  return (
    <>
      <h3>Login Page</h3>

      {authStatus === "authenticated" ? (
        <div>Authenticated as: {JSON.stringify(user, null, 2)}</div>
      ) : (
        <div>Not Authenticated</div>
      )}

      <br />

      {authStatus === "authenticated" ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("leinadpy@gmail.com", "123456")}>
          Login
        </button>
      )}
    </>
  );
};
