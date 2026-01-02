import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 New Database Name: 'fashion_store_v9' (Puthu DB for Footwear & Toys)
const MONGO_URI = "mongodb+srv://pradeepakr2006_db_user:pradeeProject2025@cluster0.pmwfvux.mongodb.net/fashion_store_v9?appName=Cluster0";

mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  image: String,
  category: String
});

const Product = mongoose.model('Product', productSchema);

// 🔥 ALL PRODUCTS (Footwear & Toys Added) 🔥
const initialProducts = [
  // --- SAREES ---
  { id: 1, name: "Royal Kanchipuram Silk", price: 15000, image: "/images/saree1.avif", category: "Sarees" },
  { id: 2, name: "Banarasi Wedding Red", price: 8500, image: "/images/saree2.avif", category: "Sarees" },
  { id: 3, name: "Soft Cotton Daily Wear", price: 1200, image: "/images/saree3.avif", category: "Sarees" },
  
  // --- ACCESSORIES ---
  { id: 4, name: "Gold Plated Necklace", price: 1500, image: "/images/jewel1.avif", category: "Accessories" },
  { id: 5, name: "Bridal Jhumka Set", price: 899, image: "/images/jewel2.avif", category: "Accessories" },
  { id: 6, name: "Diamond Stone Ring", price: 2200, image: "/images/jewel3.avif", category: "Accessories" },

  // --- BEAUTY ---
  { id: 7, name: "LipBalm", price: 2500, image: "/images/makeup1.avif", category: "Beauty" },
  { id: 8, name: "Matte Red Lipstick", price: 599, image: "/images/makeup2.avif", category: "Beauty" },
  { id: 9, name: "Luxury Perfume", price: 3000, image: "/images/makeup3.avif", category: "Beauty" },

  // --- HANDBAGS ---
  { id: 10, name: "Luxury Leather Bag", price: 3000, image: "/images/bag1.avif", category: "Handbags" },
  { id: 11, name: "Party Clutch", price: 1200, image: "/images/bag2.avif", category: "Handbags" },
  { id: 12, name: "Travel Backpack", price: 2200, image: "/images/bag3.avif", category: "Handbags" },

  // --- GADGETS ---
  { id: 13, name: "Gaming Laptop Pro", price: 55000, image: "/images/laptop.avif", category: "Gadgets" },
  { id: 14, name: "Smartphone 5G", price: 18000, image: "/images/mobile.avif", category: "Gadgets" },
  { id: 15, name: "Noise Cancelling Headphones", price: 2500, image: "/images/headphone.avif", category: "Gadgets" },

  // --- WATCHES ---
  { id: 16, name: "Men's Luxury Watch", price: 4500, image: "/images/mens-watch.avif", category: "Watches" },
  { id: 17, name: "Girls Rose Gold Watch", price: 2200, image: "/images/girls-watch.avif", category: "Watches" },
  { id: 18, name: "Kids Superhero Watch", price: 800, image: "/images/kids-watch.jpg", category: "Watches" },

  // --- 👟 FOOTWEAR (New) ---
  { id: 19, name: "Stylish Sneakers", price: 2500, image: "/images/shoe1.avif", category: "Footwear" },
  { id: 20, name: "Party Wear Heels", price: 1800, image: "/images/shoe2.avif", category: "Footwear" },
  { id: 21, name: "Men's Formal Shoes", price: 3200, image: "/images/shoe3.avif", category: "Footwear" },

  // --- 🧸 TOYS (New) ---
  { id: 22, name: "Soft Teddy Bear", price: 999, image: "/images/toy1.avif", category: "Toys" },
  { id: 23, name: "Remote Control Car", price: 1500, image: "/images/toy2.avif", category: "Toys" },
  { id: 24, name: "Barbie Doll Set", price: 1200, image: "/images/toy3.avif", category: "Toys" }
];

const initializeDB = async () => {
  try {
    await Product.deleteMany({});
    console.log("🗑️ Old Data Deleted...");
    await Product.insertMany(initialProducts);
    console.log("✅ New Footwear & Toys Added!");
  } catch (err) {
    console.error("Error resetting DB:", err);
  }
};

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get('/', (req, res) => res.send("Backend Working!"));

const PORT = 5000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await initializeDB();
});