import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/no-basic">No basico</Link>
        </li>
        <li>
          <Link href="/vars">Variables</Link>
        </li>
        <li>
          <Link href="/restrictions">Restricciones</Link>
        </li>
      </ul>
    </div>
  );
};
