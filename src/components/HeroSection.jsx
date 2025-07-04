const HeroSection = () => {
  return (
    <div className="bg-green-50 py-12 px-6 md:px-20 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div>
          <h1 className="text-gray-900 text-2xl font-bold">Welcome to </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-500 mt-2" >Biteback Super Market</h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg">
          Whether you're donating fresh food, beverages, or daily essentials, every order placed on Biteback directly supports motherless and underprivileged children.<br></br>
          Our platform works just like a regular supermarket — with shelves stocked with everything from groceries to household items — but here, everything you shop is meant to give.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-3 mb-3 sm:space-y-0 sm:space-x-6">
            <a href="/shop" className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-green-500 hover:text-black">
              25% Off Festival
            </a>
            <button className="border border-black text-black px-6 py-3 rounded-full font-medium hover:bg-green-500">
              Discover Shop
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center mt-3">
          <img
            src="/mulher.png"
            alt="Woman with groceries"
            className="w-full md:w-[70%] lg:w-[60%] rounded-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className=" bg-white shadow-lg p-6 flex flex-wrap justify-center gap-6 md:justify-between max-w-5xl mx-auto">
        <Feature icon="/delivery.png" title="Free Shipping" text="On all orders over $50.00" />
        <Feature icon="/dollar.png" title="Return for free" text="Returns are free 3 days" />
        <Feature icon="/payment.png" title="Secure Payment" text="Your payments 100% safe" />
        <Feature icon="/support.png" title="24/7 Support" text="Contact us anytime" />
      </div>
    </div>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <div className="flex items-center space-x-3">
      {/* Display Image Icon */}
      <img src={icon} alt={title} className="w-10 h-10" />
      
      {/* Title & Description */}
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default HeroSection;
