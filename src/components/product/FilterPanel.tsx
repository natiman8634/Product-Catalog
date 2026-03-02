interface FilterPanelProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterPanel = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterPanelProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-4 py-2 rounded-lg border transition
            ${
              selectedCategory === category
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white hover:bg-gray-100"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterPanel;