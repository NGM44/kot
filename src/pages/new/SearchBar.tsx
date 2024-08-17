import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div>
      
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex py-1.5 pl-2">
          <Search className="text-gray-400 w-4 h-4 mt-2 z-10" />
        </div>
        <input
          id="search"
          name="search"
          type="text"
          className="block w-full h-11 pl-8 rounded-xl border-0 py-1.5 pr-14 text-gray-900 drop-shadow-box placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded-lg border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div>
  );
}
