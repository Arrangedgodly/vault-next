import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/solid";
import { BsSafe, BsCalculator } from "react-icons/bs";
import Link from "next/link";
import {app} from '../lib/firebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

export default function Navbar() {
  return (
    <div className="navbar bg-base-300 p-5 w-screen">
      <div className="flex-none">
        <label className="btn btn-circle btn-ghost swap swap-rotate">
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
        <Link href="/profile">
          <button className="btn btn-circle btn-ghost">
            <UserIcon className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </div>
  );
}
