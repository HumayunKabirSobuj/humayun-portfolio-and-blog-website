"use client"
import { signOut } from "next-auth/react";

const logoutButton = () => {
  return (
    <div>
      <button
        className="text-white bg-green-500 px-4 py-1 rounded-3xl "
        onClick={signOut}
      >
        Logout
      </button>
    </div>
  );
};

export default logoutButton;
