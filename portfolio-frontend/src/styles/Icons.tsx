// Import specific icons from the react-icons library
import { FaHome, FaUser, FaCog, FaBook, FaBookOpen } from 'react-icons/fa';
import { MdFavorite, MdSettings } from 'react-icons/md';
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { BiShow, BiHide } from "react-icons/bi";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoAddCircle } from "react-icons/io5";
import { FaClone } from "react-icons/fa";

// Define a type for icon components
export type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// Export the icons as named exports with type annotations
export const HomeIcon: IconType = FaHome;
export const UserIcon: IconType = FaUser;
export const SettingsIcon: IconType = FaCog;
export const FavoriteIcon: IconType = MdFavorite;
export const HeartIcon: IconType = AiFillHeart;
export const SearchIcon: IconType = AiOutlineSearch;
export const ShowIcon: IconType = BiShow;
export const HideIcon: IconType = BiHide;
export const DeleteIcon: IconType = MdDelete;
export const EditIcon: IconType = MdModeEdit;
export const ShowBook: IconType = FaBook;
export const HideBook: IconType = FaBookOpen;
export const ShowAllIcon: IconType = BsStack;
export const ShowOnlyIcon: IconType = FaClone;
export const AddWork: IconType = IoAddCircle;


// Optionally, you can export all icons as a single object if needed
export const Icons = {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  FavoriteIcon,
  HeartIcon,
  SearchIcon,
  ShowIcon,
  HideIcon,
  DeleteIcon,
  EditIcon,
  ShowBook,
  HideBook,
  ShowAllIcon,
  ShowOnlyIcon,
  AddWork
};
