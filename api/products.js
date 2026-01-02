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
      image: "/images/saree2.avif" 
    },
    { 
      id: 3, 
      name: "Cotton Saree", 
      category: "Sarees", 
      price: 1500, 
      image: "/images/saree3.avif" 
    },
    { 
      id: 4, 
      name: "Gold Necklace", 
      category: "Accessories", 
      price: 15000, 
      image: "/images/jewel1.avif" 
    },
    { 
      id: 5, 
      name: "Jhumka Earrings", 
      category: "Accessories", 
      price: 15000, 
      image: "/images/jewel2.avif" 
    },

    { 
      id: 6, 
      name: "Diamond Ring", 
      category: "Accessories", 
      price: 25000, 
      image: "/images/jewel3.avif" 
    },
    { 
      id: 7, 
      name: "Lipbalm", 
      category: "Beauty", 
      price: 800, 
      image: "/images/makeup1.avif" 
    },
     { 
      id: 8, 
      name: "Matte Lipstick", 
      category: "Beauty", 
      price: 1800, 
      image: "/images/makeup2.avif" 
    },
     { 
      id: 9, 
      name: "Luxury Perfume", 
      category: "Beauty", 
      price: 2800, 
      image: "/images/makeup3.avif" 
    },
    { 
      id: 10, 
      name: "Leather Handbag", 
      category: "Handbags", 
      price: 15000, 
      image: "/images/bag1.avif" 
    },
    { 
      id: 11, 
      name: "Travel Backpack", 
      category: "Handbags", 
      price: 2800, 
      image: "/images/bag2.avif" 
    },
    { 
      id: 12, 
      name: "Party Clutch", 
      category: "Handbags", 
      price: 2000, 
      image: "/images/bag3.avif" 
    },
    { 
      id: 13, 
      name: "Gaming Laptop", 
      category: "Gadgets", 
      price: 65000, 
      image: "/images/gadgets.avif" 
    },
    { 
      id: 14, 
      name: "Noise Cancelling Headphones", 
      category: "Gadgets", 
      price: 25000, 
      image: "/images/headphone.avif" 
    },
    { 
      id: 15, 
      name: "Smartphone", 
      category: "Gadgets", 
      price: 25000, 
      image: "/images/mobile.avif" 
    },
    { 
      id: 16, 
      name: "Smart Watch", 
      category: "Watches", 
      price: 3000, 
      image: "/images/mens-watch.avif" 
    },
     { 
      id: 17, 
      name: "Mens Watch", 
      category: "Watches", 
      price: 2000, 
      image: "/images/mens-watch.avif" 
    },
     { 
      id: 18, 
      name: "Kids Watch", 
      category: "Watches", 
      price: 300, 
      image: "/images/kids-watch.avif" 
    },
     { 
      id: 19, 
      name: "Girls Watch", 
      category: "Watches", 
      price: 5000, 
      image: "/images/girls-watch.avif" 
    },
    { 
      id: 20, 
      name: "sneakers", 
      category: "Footwear", 
      price: 1200, 
      image: "/images/shoe1.avif" 
    },
    { 
      id: 21, 
      name: "Heels", 
      category: "Footwear", 
      price: 1200, 
      image: "/images/shoe2.avif" 
    },
    { 
      id: 22, 
      name: "Formal Shoes", 
      category: "Footwear", 
      price: 1200, 
      image: "/images/shoe3.avif" 
    },
    { 
      id: 23, 
      name: "RC Car", 
      category: "Toys", 
      price: 1500, 
      image: "/images/toy2.avif" 
    },
    
    {
      id: 24, 
      name: "Teddy Bear", 
      category: "Toys", 
      price: 1500, 
      image: "/images/toy1.avif" 
    },
    {
      id: 25, 
      name: "Barbie Doll", 
      category: "Toys", 
      price: 1500, 
      image: "/images/toy3.avif" 
    },

  ];

  // Backend response anuppugirathu
  res.status(200).json(products);
}