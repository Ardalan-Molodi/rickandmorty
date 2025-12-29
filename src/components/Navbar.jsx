import { HeartIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <div className="w-[85%] h-14  bg-gray-600 rounded-md flex justify-between items-center px-5 mt-20 mx-auto">
      <h2>Logo ❤️</h2>
      <input
        type="search"
        className="bg-gray-400 text-sm w-1/2 max-lg:flex-1 max-lg:mx-10  h-10 text-center text-white rounded-lg outline-none placeholder-white "
        placeholder="serching..."
      />
      <button className="cursor-pointer relative">
        <h2>
          <HeartIcon className="size-6 text-red-500" />
        </h2>
        <span className="absolute -top-3 right-0">0</span>
      </button>
    </div>
  );
}
