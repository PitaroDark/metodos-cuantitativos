export default function Loading({ message }: { message: string }) {
  return (
    <div
      className={
        "bg-black/80 flex fixed flex-col items-center justify-center top-0 left-0 w-full h-screen z-50"
      }
    >
      <span className="w-12 h-12 border-[5px] border-primary-500 animate-spin rounded-3xl border-b-[rgba(255,255,255,0)] " />
      <p className="text-4xl text-white m-5">{message}</p>
    </div>
  );
}
