"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  absolute?: boolean;
}

export const Navbar = ({ absolute = false }: NavbarProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`${absolute && "absolute "}w-full border-b border-slate-800`}
    >
      <div className="container mx-auto">
        <ul
          className="
          flex
          flex-1
          justify-center
          gap-x-40
          py-4
          text-lg
          font-semibold
          text-white
          bg-slate-900
          backdrop-blur-xl
          border-b
          border-slate-800
          z-50
        "
        >
          <li
            className={`
            transition
            duration-300
            ease-in-out
            transform
            hover:scale-x-110
            hover:font-bold
            hover:text-blue-500
            ${pathname === "/" ? "text-blue-500" : ""}
          `}
          >
            <Link href="/">Inicio</Link>
          </li>
          <li
            className={`
              transition
              duration-300
              ease-in-out
              transform
              hover:scale-x-110
              hover:font-bold
              hover:text-blue-500
              ${pathname === "/no-basic" ? "text-blue-500" : ""}
            `}
          >
            <Link href="/no-basic">No basico</Link>
          </li>
          <li
            className={`
              transition
              duration-300
              ease-in-out
              transform
              hover:scale-x-110
              hover:font-bold
              hover:text-blue-500
              ${pathname === "/vars" ? "text-blue-500" : ""}
            `}
          >
            <Link href="/vars">Variables</Link>
          </li>
          <li
            className={`
              transition
              duration-300
              ease-in-out
              transform
              hover:scale-x-110
              hover:font-bold
              hover:text-blue-500
              ${pathname === "/restrictions" ? "text-blue-500" : ""}
            `}
          >
            <Link href="/restrictions">Restricciones</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
