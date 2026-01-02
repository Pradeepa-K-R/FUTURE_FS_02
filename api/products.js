export default function handler(req, res) {
  // Unga Products Data (Backend Data)
  const products = [
    { 
      id: 1, 
      name: "Kanchipuram Silk", 
      category: "Sarees", 
      price: 5000, 
      image: "/images/saree1.avif" 
    },
    { 
      id: 2, 
      name: "Banarasi Saree", 
      category: "Sarees", 
      price: 3500, 
      image: "/images/saree1.avif" 
    },
    { 
      id: 3, 
      name: "Gold Necklace", 
      category: "Accessories", 
      price: 15000, 
      image: "/images/jewel1.avif" 
    },
    { 
      id: 4, 
      name: "Diamond Ring", 
      category: "Accessories", 
      price: 25000, 
      image: "/images/jewel1.avif" 
    },
    { 
      id: 5, 
      name: "Lipstick Set", 
      category: "Beauty", 
      price: 800, 
      image: "/images/makeup1.avif" 
    },
    { 
      id: 6, 
      name: "Leather Handbag", 
      category: "Handbags", 
      price: 2000, 
      image: "/images/bag1.avif" 
    },
    { 
      id: 7, 
      name: "Gaming Laptop", 
      category: "Gadgets", 
      price: 65000, 
      image: "/images/gadgets.avif" 
    },
    { 
      id: 8, 
      name: "Smartphone", 
      category: "Gadgets", 
      price: 25000, 
      image: "/images/gadgets.avif" 
    },
    { 
      id: 9, 
      name: "Smart Watch", 
      category: "Watches", 
      price: 3000, 
      image: "/images/mens-watch.avif" 
    },
    { 
      id: 10, 
      name: "Running Shoes", 
      category: "Footwear", 
      price: 1200, 
      image: "/images/footwear.avif" 
    },
    { 
      id: 11, 
      name: "RC Car", 
      category: "Toys", 
      price: 1500, 
      image: "/images/Toys.avif" 
    }
  ];

  // Backend response anuppugirathu
  res.status(200).json(products);
}