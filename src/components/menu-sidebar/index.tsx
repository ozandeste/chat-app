import { Bars3Icon, ListBulletIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";

type Props = {
};

const MenuSidebar = (props: Props) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <div className="h-full w-full flex flex-col justify-between overflow-auto px-3 py-3 border-r border-r-back-color">
      <button>
        <Bars3Icon className="w-8 h-8"/>
      </button>
      <ul className="flex flex-col gap-4">
        <li>
          <button>
            <ListBulletIcon className="w-8 h-8"/>
          </button>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default MenuSidebar;
