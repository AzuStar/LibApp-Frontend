import React from "react";

interface AuthState {
  username?: string;
  isStaff?: boolean;
}

const AuthContext = React.createContext<
  [AuthState, React.Dispatch<React.SetStateAction<AuthState>>]
>([{ username: "" }, (prev: AuthState) => prev]);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [state, setState] = React.useState<AuthState>({
    username: "John Doe",
  });
  React.useEffect(() => {
    let interval;
    if (state.username) {
      interval = setInterval(() => {
        // refresh token
      });
    }
    return () => {
      clearInterval(interval);
    };
  }, [state]);
  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};
