interface FilterBlockProps {
  title: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function FilterBlock({ title, options, selected, onSelect }: FilterBlockProps) {
  return (
    <div className="mb-6">
      <h4 className="font-semibold mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            className={`px-3 py-1.5 rounded-full text-sm ${
              selected === opt
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-indigo-100"
            }`}
            onClick={() => onSelect(opt === selected ? '' : opt)}
          >
            {opt}
          </button>
        ))}
        {selected && (
          <button
            className="px-3 py-1.5 rounded-full bg-red-100 text-red-700 text-sm hover:bg-red-200"
            onClick={() => onSelect('')}
          >
            Clear
          </button>
        )}
      </div>
    </div>
  );
}