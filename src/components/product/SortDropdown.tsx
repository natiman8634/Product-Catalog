interface SortDropdownProps {
  sortOption: string;
  onSortChange: (value: string) => void;
}

const SortDropdown = ({
  sortOption,
  onSortChange,
}: SortDropdownProps) => {
  return (
    <div className="flex items-center justify-end mb-6">
      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="
          border rounded-lg px-3 py-2
          focus:outline-none
          focus:ring-2
          focus:ring-blue-400
          bg-white
          hover:bg-gray-100
        "
      >
        <option value="default">Sort by: Default</option>
        <option value="priceLow">Price: Low → High</option>
        <option value="priceHigh">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;