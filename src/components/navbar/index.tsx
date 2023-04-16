import { auth } from "../../firebase";
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";

type Props = {
  setIsLoggedIn: (value: boolean) => void;
};

const Navbar = ({setIsLoggedIn}: Props) => {
  const flexBetween = "flex items-center justify-between";

  const logOut = async() => {
    window.alert("Çıkış yapıldı");;
    await signOut(auth);
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }

  return (
    <div className={`${flexBetween} h-16 w-full bg-purple-dark-200 px-3 py-3`}>
      <div className="flex gap-3">
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-purple-40" />
        <h1 className="text-white">Messenger</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative flex items-center gap-3">
          <label className="absolute right-5" htmlFor="search">
            <MagnifyingGlassIcon className="h-6 w-6 text-purple-40" />
          </label>
          <input
            id="search"
            className="rounded-lg bg-purple-dark-100 px-2 py-2 text-white outline-none focus:outline-1 focus:outline-purple-dark-100"
            type="text"
            placeholder="Search"
          />
        </div>
        {/* <div onClick={() => logOut()} className="h-8 w-8 rounded-3xl bg-white opacity-5">çıkış yap</div> */}
        <div onClick={() => logOut()} className="hover:text-white">Çıkış Yap</div>
      </div>
    </div>
  );
};

export default Navbar;
