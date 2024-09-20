import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";

// Assume we have a list of UI component keys
export const uiComponentKeys = [
  "Temperature",
  "Humidity",
  "Pressure",
  "Differential Pressure",
  "Carbon Dioxide",
  "VOCs",
  "Light",
  "Noise",
  "Productivity Meter",
  "Particulate Matter",
  "Air Quality Index",
  "Gas 1",
  "Gas 2",
  "Gas 3",
  "Gas 4",
  "Gas 5",
  "Gas 6",
];

export default function SearchBar({ onHighlight }: { onHighlight: any }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<any>(null);
  const suggestionsRef = useRef<any>(null);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    const handleOutsideClick = (event: any) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
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
  }, []);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setSearchTerm(value);

    // Filter UI component keys based on input
    let filtered = [];
    filtered = uiComponentKeys.filter((key) =>
      key.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    setShowSuggestions(true);
    uiComponentKeys.forEach((ele) => {
      const element1 = document.getElementById(ele);
      if (element1) element1.style.backgroundColor = "#FFFFFF";
    });
    if (value) {
      filtered.forEach((ele: any) => {
        const element1 = document.getElementById(ele);
        if (element1) 
        {
           element1.style.border = "#f2f0ff";
 
        }
         
        if (element1 && filtered.length >= 1) {
          element1.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    }
    // Highlight matching components
    if (onHighlight) {
      onHighlight(filtered);
    }
  };

  const handleSuggestionClick = (suggestion: any) => {
    setSearchTerm(suggestion);
    setShowSuggestions(false);
    uiComponentKeys.forEach((ele) => {
      const element1 = document.getElementById(ele);
      if (element1) element1.style.backgroundColor = "#FFFFFF";
    });
    if (suggestion) {

        const element1 = document.getElementById(suggestion);
        if (element1) element1.style.backgroundColor = "#f2f0ff";
        if (element1) {
          element1.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      
    }
    if (onHighlight) {
      onHighlight([suggestion]);
    }
  };

  return (
    <div className="relative">
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex py-1.5 pl-2">
          <Search className="text-gray-400 w-4 h-4 mt-2 z-10" />
        </div>
        <input
          ref={inputRef}
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search Metrics"
          className="block w-full h-11 pl-8 rounded-xl border-0 py-1.5 pr-14 text-gray-900 drop-shadow-box placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded-lg border border-gray-300 px-1 font-sans text-xs text-gray-600">
            ⌘K
          </kbd>
        </div>
      </div>
      {showSuggestions && suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="relative cursor-pointer select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-gray-100"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
