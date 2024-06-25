import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl mb-5">Pagina no encontrada</h1>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
        <Link href="/">Volver a pagina principal</Link>
      </button>
    </div>
  );
}

export default NotFound;
