const productsDB = [
  { id: 'prod001', name: 'Laptop Pro', price: 1200.00, category: 'Electronics', stock: 15 },
  { id: 'prod002', name: 'Mechanical Keyboard', price: 95.50, category: 'Accessories', stock: 0 },
  { id: 'prod003', name: 'Gaming Mouse', price: 49.99, category: 'Accessories', stock: 250 },
  { id: 'prod004', name: '4K Monitor', price: 350.00, category: 'Electronics', stock: 5 },
  { id: 'prod005', name: 'Webcam HD', price: 75.00, category: 'Peripherals', stock: 0 }
];
const sales_tax_rate = 0.08;
let array2  = [];

let Summary = productsDB.map((products) =>({
    product_id: products.id,
    product_name: products.id,
    product_category: products.id,
    product_price: products.id,
    product_stock: products.id,
    // console.log(num.id);
    // console.log(num.name);
    // console.log(num.category);
    // console.log(num.price*sales_tax_rate.toFixed(2));
    // console.log(num.stock);
}));




