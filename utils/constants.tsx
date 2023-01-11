import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { IoPersonAddOutline } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";

export const title = "Alkoblog";
export const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/about",
    icon: AiOutlineInfoCircle,
  },
  {
    name: "My projects",
    href: "/projects",
    icon: CgWebsite,
  },
  {
    name: "My blog",
    href: "/blog",
    icon: MdOutlineLibraryBooks,
  },
  {
    name: "Hire me",
    href: "/hireme",
    icon: IoPersonAddOutline,
  },
];
