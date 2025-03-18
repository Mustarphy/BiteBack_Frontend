const Categories = () => {
    const categories = [
      { name: "Fishes & Raw Meats", icon: "/categoriesA.png" },
      { name: "Fruits & Vegetables", icon: "/categoriesB.png" },
      { name: "Breads & Sweets", icon: "/categoriesC.png" },
      { name: "Milks & Proteins", icon: "/categoriesD.png" },
      { name: "Cleaning Materials", icon: "/categoriesE.png" },
      { name: "Ready to Use Foods", icon: "/categoriesF.png" },
    ];
  
    return (
      <div className="py-12 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Discover our <span className="text-green-500">Categories</span>
        </h2>
  
        {/* Responsive Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center space-y-3 border border-gray-200 
              transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            >
              <img src={category.icon} alt={category.name} className="w-12 h-12 text-green-500" />
              <p className="text-gray-900 font-semibold text-sm text-center">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Categories;
