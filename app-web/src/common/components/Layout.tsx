// src/components/Layout.tsx
import { UserButton } from "@clerk/clerk-react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="bg-base-100 shadow-md fixed top-0 w-full z-50 h-14 bg-gradient-to-t from-sky-500 to-indigo-500">
        <div className="navbar max-w-screen-lg mx-auto">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl lef">
              NearVibe
            </Link>
          </div>

          <div className="flex-none gap-2">
            <div className="w-8 rounded-full">
              <UserButton />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 px-4 flex-1 bg-base-200">
        <div className="max-w-screen-lg mx-auto">{children}</div>
      </div>
    </div>
  );
}
