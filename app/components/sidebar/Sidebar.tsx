"use client";

interface SidebarProps {
  onFilterChange: (filterId: number) => void;
}

interface Category {
  id: number;
  label: string;
  color: string;
}

const Sidebar = ({ onFilterChange }: SidebarProps) => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 0, label: "Mostrar todo", color: "bg-gray-400" },
    { id: 1, label: "Ideas", color: "bg-green_category" },
    { id: 2, label: "Por hacer", color: "bg-orange_category" },
    { id: 3, label: "Terminado", color: "bg-blue_category" },
  ]);

  const handleFilterClick = (filterId: number) => {
    onFilterChange(filterId);
  };

  const addCategory = () => {
    const newCategory: Category = {
      id: categories.length,
      label: `Nueva Categoría ${categories.length}`,
      color: "bg-red_alert",
    };
    setCategories([...categories, newCategory]);
  };

  return (
    <div className="flex flex-col space-y-2 p-4 text-lg text-gray-600">
      <div className="flex flex-row items-center space-x-4">
        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25..." />
        </svg>
        <p className="font-bold">Notas</p>
      </div>
      <div className="flex flex-col min-w-44">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterClick(category.id)}
            className={`text-left font-medium hover:bg-gray_secondary flex flex-row items-center space-x-2 ${category.color}`}
          >
            <div className={`${category.color} rounded-full p-1 animate-pulse`}></div>
            <span>{category.label}</span>
          </button>
        ))}
      </div>
      <button onClick={addCategory} className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray_primary">
        Agregar Categoría
      </button>
    </div>
  );
};

export default Sidebar;
