import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/solid";
import { BsSafe, BsCalculator } from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 p-5">
      <div className="flex-none">
        <label className="btn btn-circle swap swap-rotate">
          <input type="checkbox" />
          <Bars3Icon className="w-6 h-6 swap-off" />
          <XMarkIcon className="w-6 h-6 swap-on" />
        </label>
      </div>
      <div className="flex-1 px-2 mx-2 justify-center">
        <Link href="/" legacyBehavior>
          <a className="flex flex-row space-around">
            <BsSafe className="w-10 h-10" />
            <BsCalculator className="w-10 h-10" />
          </a>
        </Link>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Link href="/profile">
            <UserIcon className="w-6 h-6" />
          </Link>
        </button>
      </div>
    </div>
  );
}
