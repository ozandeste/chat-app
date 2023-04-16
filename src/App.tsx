import MenuSidebar from "./components/menu-sidebar/";
import Navbar from "./components/navbar";
import Chats from "./components/chats/";
import ChatScreen from "./components/chatscreen/";
import ChatInfos from "./components/chatinfos/";
import { useEffect, useState } from "react";
import Form from "./components/form";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

console.clear()
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);
  const [users, setUsers] = useState<Object>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
        setUsers(user)
      }
      else {

      }
    })
  }, [])

  return (
    <div className="app bg-purple-dark-300">
      <div className="flex h-full">
        <div className="flex basis-1 flex-col bg-purple-dark-300">
          <MenuSidebar />
        </div>
        <div className="flex min-h-full w-full flex-col">
          <Navbar setIsLoggedIn={setIsLoggedIn} />
          <div className="flex w-full h-full">
            {
              isLoggedIn && users instanceof Object && (
                <h1>Welcome {users.email}</h1>
              )
            }
            {
              isLoggedIn ? <>
              <Chats />
              <ChatScreen />
              <ChatInfos />
              
              </> : <Form setIsLoggedIn={setIsLoggedIn}/> 

            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
