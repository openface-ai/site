import Link from "next/link";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AuthButton() {
  const { user, isLoading } = useUser();
  const userImgSrc =
    user?.picture ||
    "https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg";
  return (
    <div>
      {isLoading ? (
        <span>...</span>
      ) : user ? (
        <div className="flex flex-col justify-center items-center">
          <Image
            src={userImgSrc}
            alt="User Profile"
            className="rounded-3xl justify-center mb-1"
            width={50}
            height={50}
          />
          <Link
            href="/api/auth/logout"
            className="hover:text-white transition-c colors "
          >
            Logout
          </Link>
        </div>
      ) : (
        <Link
          href="/api/auth/login"
          className="hover:text-white transition-colo ors"
        >
          Login
        </Link>
      )}
    </div>
  );
}
