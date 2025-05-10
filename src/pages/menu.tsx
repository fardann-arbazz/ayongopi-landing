import { Button } from "@/components/ui/button";
import { useState } from "react";

const drinks = [
  {
    name: "Espresso",
    description: {
      hot: "Kopi hitam pekat tanpa campuran (panas).",
      ice: "Kopi hitam pekat tanpa campuran (dingin).",
    },
    price: {
      hot: "Rp 20.000",
      ice: "Rp 22.000",
    },
    image: {
      hot: "https://i.pinimg.com/736x/c1/2e/34/c12e344b0dc9b687b4e4f8dd04996877.jpg",
      ice: "https://i.pinimg.com/736x/cb/48/db/cb48db04009801523739569e0f33cfc3.jpg",
    },
  },
  {
    name: "Latte",
    description: {
      hot: "Espresso dengan susu panas dan foam.",
      ice: "Espresso dengan susu dingin dan foam.",
    },
    price: {
      hot: "Rp 25.000",
      ice: "Rp 27.000",
    },
    image: {
      hot: "https://i.pinimg.com/736x/e3/83/f9/e383f9aba12fcabbffd116323690fb57.jpg",
      ice: "https://i.pinimg.com/736x/16/9f/12/169f126f1c59292ac3a24c29e4b3b4ea.jpg",
    },
  },
  {
    name: "Cappuccino",
    description: {
      hot: "Kopi dengan foam susu yang lembut (panas).",
      ice: "Kopi dengan foam susu yang lembut (dingin).",
    },
    price: {
      hot: "Rp 23.000",
      ice: "Rp 25.000",
    },
    image: {
      hot: "https://i.pinimg.com/736x/9d/88/b1/9d88b1aff2041fe5095d8fa1eea8977f.jpg",
      ice: "https://i.pinimg.com/736x/16/9f/12/169f126f1c59292ac3a24c29e4b3b4ea.jpg",
    },
  },
  {
    name: "Mocha",
    description: {
      hot: "Kopi dengan campuran cokelat panas.",
      ice: "Kopi dengan campuran cokelat dingin.",
    },
    price: {
      hot: "Rp 28.000",
      ice: "Rp 30.000",
    },
    image: {
      hot: "https://i.pinimg.com/736x/22/8b/72/228b72a03cb98c19063193cf0188a6a3.jpg",
      ice: "https://i.pinimg.com/736x/9a/55/76/9a557696624ffdf2f99264a7bbffe377.jpg",
    },
  },
  {
    name: "Caramel Macchiato",
    description: {
      hot: "Espresso dengan susu dan karamel panas.",
      ice: "Espresso dengan susu dan karamel dingin.",
    },
    price: {
      hot: "Rp 30.000",
      ice: "Rp 32.000",
    },
    image: {
      hot: "https://i.pinimg.com/736x/e3/83/f9/e383f9aba12fcabbffd116323690fb57.jpg",
      ice: "https://i.pinimg.com/736x/8d/b9/99/8db999db9605c30f912aa26616343b01.jpg",
    },
  },
];

const foods = [
  {
    name: "Chicken Sandwich",
    description: "Roti isi ayam panggang dan sayuran segar.",
    price: "Rp 30.000",
    image:
      "https://i.pinimg.com/736x/36/85/c0/3685c069ae36110335457c5cc82cf140.jpg",
  },
  {
    name: "French Fries",
    description: "Kentang goreng gurih dengan saus.",
    price: "Rp 15.000",
    image:
      "https://i.pinimg.com/736x/c8/67/a8/c867a81d91c02b8edf5bfe91ecb69472.jpg",
  },
  {
    name: "Spaghetti Bolognese",
    description: "Pasta dengan saus daging tomat.",
    price: "Rp 35.000",
    image:
      "https://i.pinimg.com/736x/8e/a1/38/8ea138d9fedca1f76cf4310b00e6c452.jpg",
  },
  {
    name: "Pizza Margherita",
    description: "Pizza dengan keju dan saus tomat.",
    price: "Rp 40.000",
    image:
      "https://i.pinimg.com/736x/3e/c9/fe/3ec9fe32c6217014789b5f42e2343f47.jpg",
  },
  {
    name: "Pancake",
    description: "Kue lembut dengan sirup maple.",
    price: "Rp 20.000",
    image:
      "https://i.pinimg.com/736x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("drinks");
  const [selectedTemp, setSelectedTemp] = useState<{
    [key: number]: "hot" | "ice";
  }>({});

  const toggleTemperature = (index: number, temp: "hot" | "ice") => {
    setSelectedTemp((prev) => ({
      ...prev,
      [index]: temp,
    }));
  };

  const renderMenu = () => {
    const menuItems = activeCategory === "drinks" ? drinks : foods;

    return (
      <div className="mt-6">
        <div className="flex gap-3 flex-wrap justify-center">
          {menuItems.map((item, index) => {
            const temp = selectedTemp[index] || "hot";
            return (
              <div
                key={index}
                className="bg-white w-72 p-4 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <img
                  src={
                    activeCategory === "drinks" &&
                    typeof item.image === "object"
                      ? item.image[temp]
                      : (item.image as string)
                  }
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                />
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  {activeCategory === "drinks" && (
                    <div className="flex gap-1">
                      <Button
                        onClick={() => toggleTemperature(index, "hot")}
                        className={`cursor-pointer hover:bg-red-600 hover:text-white text-sm ${
                          temp === "hot"
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-700"
                        } rounded-full px-3 py-1`}
                      >
                        Hot
                      </Button>
                      <Button
                        onClick={() => toggleTemperature(index, "ice")}
                        className={`cursor-pointer hover:bg-blue-600 hover:text-white text-sm ${
                          temp === "ice"
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "bg-gray-200 text-gray-700"
                        } rounded-full px-3 py-1`}
                      >
                        Ice
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm italic my-1">
                  {activeCategory === "drinks" &&
                  typeof item.description === "object"
                    ? item.description[temp] || ""
                    : typeof item.description === "string"
                    ? item.description
                    : ""}
                </p>
                <p className="mt-2 font-semibold">
                  {activeCategory === "drinks" && typeof item.price === "object"
                    ? String(item.price[temp] || "")
                    : String(item.price || "")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-20 mb-20 flex flex-col justify-center items-center">
      <h1 className="text-center mt-12 text-4xl text-sky-500 font-bold">
        Menu AyoNgopi
      </h1>
      <p className="sm:w-[500px] text-center mt-4 text-gray-600">
        Kamu bisa download menu-menunya via Google Drive ya! Klik tombol di
        bawah untuk mengunduh 👌
      </p>
      <a
        href="https://drive.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-sky-500 text-white font-semibold py-2 px-6 mt-4 rounded-md hover:bg-sky-600 transition"
      >
        Download Menu
      </a>
      <div className="flex justify-center gap-2 mt-16">
        <button
          onClick={() => setActiveCategory("drinks")}
          className={`py-2 px-6 font-semibold cursor-pointer rounded-full transition ${
            activeCategory === "drinks"
              ? "bg-sky-500 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          Minuman
        </button>
        <button
          onClick={() => setActiveCategory("foods")}
          className={`py-2 px-6 font-semibold cursor-pointer rounded-full transition ${
            activeCategory === "foods"
              ? "bg-sky-500 text-white"
              : "bg-white text-gray-700 border"
          }`}
        >
          Makanan
        </button>
      </div>
      <div className="w-full px-12 mt-8">{renderMenu()}</div>
    </div>
  );
};

export default Menu;
