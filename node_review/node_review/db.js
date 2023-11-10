import { MongoClient } from "mongodb";

const MONGOURL = "mongodb://127.0.0.1:27017/";
const db = {};

// const connectToDb = () => {
//   const client = new MongoClient(
//     " mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6"
//   );
//   client.connect();
//   const database = client.db("your_db_name");
//   db.inventories = database.collection("inventories");
//   db.orders = database.collection("orders");
//   db.users = database.collection("users");
// };

const inventory = [
  { _id: 1, sku: "almonds", description: "product 1", instock: 120 },
  { _id: 2, sku: "bread", description: "product 2", instock: 80 },
  { _id: 3, sku: "cashews", description: "product 3", instock: 60 },
  { _id: 4, sku: "pecans", description: "product 4", instock: 70 },
];

const order = [
  { _id: 1, item: "almonds", price: 12, quantity: 2 },
  { _id: 2, item: "pecans", price: 20, quantity: 1 },
  { _id: 3, item: "pecans", price: 20, quantity: 3 },
];

const users = [
  { username: "admin", password: "MindX@2022" },
  { username: "alice", password: "MindX@2022" },
];

const connectToDatabase = async () => {
  try {
    const mongoClient = new MongoClient(MONGOURL);
    await mongoClient.connect();
    console.log("Database connected successfully");
    const database = mongoClient.db("test-web71");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
    const isDataInventory = await db.inventories.countDocuments();
    const isDataOrders = await db.orders.countDocuments();
    const isDataUsers = await db.users.countDocuments();
    if (isDataInventory && isDataOrders && isDataUsers) {
      return;
    }
    importData();
  } catch (error) {
    console.error("Connect to DB failed:", error);
    process.exit(1);
  }
};

// const isDataBaseHasData = async () => {
//   const hasCollection = await db.inventories.count();
//   const order = await db.orders.count();
//   const user = await db.users.count();
//   if (inventory && order && user) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isDataBaseHasData());
const importData = async () => {
  try {
    await db.inventories.insertMany(inventory);
    await db.orders.insertMany(order);
    await db.users.insertMany(users);
    console.log("data import successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { connectToDatabase, db };
