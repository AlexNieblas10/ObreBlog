import { createContext, useEffect, useState } from "react";

export const MainContext = createContext();

export function ContextProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [imageUrl, setImageUrl] = useState(false);
  const [activeAccount, setActiveAccount] = useState(false);
  const [activeNavegation, setActiveNavegation] = useState(false);

  useEffect(() => {
    let username = window.localStorage.getItem("user");

    if (username !== null) {
      fetch(`http://localhost:6655/ProfilePic/?username=${username}`)
        .then((response) => response.json())
        .then((data) => {
          setImageUrl(data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  const [loggedUser, setLoggetUser] = useState(
    localStorage.getItem("wasConnected")
  );

  useEffect(() => {
    if (activeAccount) {
      setActiveNavegation(false);
    }
  }, [activeAccount]);

  useEffect(() => {
    if (activeNavegation) {
      setActiveAccount(false);
    }
  }, [activeNavegation]);

  return (
    <MainContext.Provider
      value={{
        setUser,
        loggedUser,
        setLoggetUser,
        activeAccount,
        setActiveAccount,
        activeNavegation,
        setActiveNavegation,
        imageUrl,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
