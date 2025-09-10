import { Link, useNavigate } from "react-router-dom";
import ChatbotFloat from "../components/ChatbotFloat";

const categories = [
  {
    title: "Fashions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbB_jgxoaV0-TK5KPsFxkca5cEROonM0Utg&s",
    products: "1462 products",
  },
  {
    title: "Electronics",
    image: "https://static-assets.business.amazon.com/assets/in/24th-jan/705_Website_Blog_Appliances_1450x664.jpg.transform/1450x664/image.jpg",
    products: "89 products",
  },
  {
    title: "Watches",
    image: "https://static.helioswatchstore.com/media/easyslide/Artboard_6-25.jpg",
    products: "98 products",
  },
  {
    title: "Footwear",
    image: "https://bedrocksandals.com/cdn/shop/files/BEDROCK_2024_070824_BydlonAndrew_Bedrock100123_BydlonAndrewBEDROCK_HiRes_070324_BydlonAndrewBedrock100123_BydlonAndrew0366_1600x.jpg?v=1739553730",
    products: "102 products",
  },
  {
    title: "Home decor",
    image: "https://i.ytimg.com/vi/xYYsZwuX2C8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAaQ-FCpu1SQWVmEC-lxVwKaBiBAQ",
    products: "478 products",
  },
  {
    title: "Books",
    image: "https://i0.wp.com/apeejay.news/wp-content/uploads/2023/10/281023-10-most-read-books-Feature.jpg?fit=569%2C509&ssl=1",
    products: "387 products",
  },
  {
    title: "Kitchen",
    image: "https://platform.eater.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/19859137/shutterstock_1042252666.jpg?quality=90&strip=all&crop=0,10.607986971708,100,78.784026056585",
    products: "247 products",
  },
  {
    title: "Sports",
    image: "https://st.depositphotos.com/1875851/1555/i/450/depositphotos_15558827-stock-photo-balls-in-sport.jpg",
    products: "547 products",
  },
];

const featured = [
  {
    title: "New Arrivals",
    description: "Discover our latest products and be the first to try them",
    image: "https://www.cato.org/sites/cato.org/files/styles/optimized/public/2023-11/fast-fashion2.jpeg?itok=qCMa7eGV",
    buttonText: "Shop Now",
    buttonColor: "primary",
  },
  {
    title: "Special Offers",
    description: "Limited-time discounts on select products",
    image: "https://naymestreet.com/cdn/shop/files/onsale.png?v=1741606263&width=1080",
    buttonText: "View Deals",
    buttonColor: "secondary",
  },
];

export default function Collections() {
  const navigate = useNavigate();

  // Handle button clicks for featured collections
  const handleFeatureClick = (title) => {
    if (title === "New Arrivals") {
      navigate("/new-arrivals");
    } else if (title === "Special Offers") {
      navigate("/special-offers");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-4 md:p-8">
        <div className="flex items-center mb-4">
          <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-800" title="Go back">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mx-auto">Collections</h1>
        </div>
        <p className="text-center text-gray-600 mb-8">
          Explore our wide range of products across different categories, curated for quality and style
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((item, idx) => {
            const getRouteForCategory = (title) => {
              switch (title) {
                case "Fashions":
                  return "/fashion";
                case "Electronics":
                  return "/electronics";
                case "Watches":
                  return "/watches";
                case "Footwear":
                  return "/footwear";
                case "Home decor":
                  return "/home-decor";
                case "Books":
                  return "/books";
                case "Kitchen":
                  return "/kitchen";
                case "Sports":
                  return "/sports";
                default:
                  return `/shop?category=${encodeURIComponent(title)}`;
              }
            };

            return (
              <Link
                key={idx}
                to={getRouteForCategory(item.title)}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.products}</p>
                </div>
              </Link>
            );
          })}
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">Feature collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((item, idx) => (
            <div className="bg-white rounded-lg shadow-md overflow-hidden" key={idx}>
              <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-white ${item.buttonColor === 'primary' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}
                  onClick={() => handleFeatureClick(item.title)}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ChatbotFloat />
    </div>
  );
}