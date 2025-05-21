import type { Post } from "../../store/firebase/types";
import { FaHeart, FaBookmark } from "react-icons/fa";

export function CardPost({ post }: { post: Post }) {
  return (
    <div className="card bg-base-100 w-full shadow-md overflow-hidden rounded-t-lg">
      <figure className="relative w-full">
        <div className="absolute inset-0 z-0 pointer-events-none shadow-[inset_0px_30px_80px_rgba(0,0,0,0.5)] rounded-t-lg"></div>

        <img
          src="https://vertegrande.com/wp-content/uploads/2022/02/serie_netflix.jpg"
          alt="Post"
          className="w-full h-auto rounded-t-lg"
        />

        <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
          <img
            src="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvb2F1dGhfZ29vZ2xlL2ltZ18yeEtmb0FXaUdTSlJ0YmZPVFdqRTRUbVk1emMifQ?width=160"
            alt="User"
            className="rounded-full w-10 h-10 shadow-sm"
          />
          <p className="text-sm font-semibold text-white">
            {post.userName} {post.userLastName}
          </p>
        </div>
      </figure>

      <div className="card-body pt-3">
        <div className="w-full">
          <div className="flex flex-row items-center w-full">
            <div className="flex-1 flex-row items-start gap-2">
              <button className="btn btn-circle bg-transparent border-0 shadow-sm w-10 h-10">
                <FaHeart className="text-red-500 text-xl" />
              </button>
              <button className="btn btn-circle bg-transparent border-0 shadow-sm">
                <FaBookmark className="text-orange-500 text-xl" />
              </button>
            </div>
            <div className="flex-1 justify-end align-end gap-2">
              <p> Hace 15 minutos - A 350 metros de ti</p>
            </div>
          </div>
        </div>

        <p>{post.description}</p>
      </div>
    </div>
  );
}
