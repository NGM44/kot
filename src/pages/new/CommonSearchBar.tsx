import React, { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

interface GenericSearchBarProps {
  onSearch: (results: string) => void;
  placeholder?: string;
  keyboardShortcut?: string;
}

export default function GenericSearchBar({
  onSearch,
  placeholder = "Search...",
  keyboardShortcut = "k",
}: GenericSearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === keyboardShortcut) {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    const handleOutsideClick = (event: MouseEvent) => {
      if (
        !suggestionsRef.current?.contains(event.target as Node) &&
        !inputRef.current?.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [keyboardShortcut]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex py-1.5 pl-2">
          <Search className="text-gray-400 w-4 h-4 mt-2 z-10" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder={placeholder}
          className="block w-full h-11 pl-8 rounded-xl border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘{keyboardShortcut.toUpperCase()}
          </kbd>
        </div>
      </div>
    </div>
  );
}
