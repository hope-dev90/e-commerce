const mockOrders = [
  { id: 'ORD-001', date: '2024-01-10', status: 'DELIVERED',  total: 70,  items: [{ name: 'Simple T-Shirt', qty: 1, price: 20 }, { name: 'Simple Watch', qty: 1, price: 30 }, { name: 'Everyday Bag', qty: 1, price: 25 }] },
  { id: 'ORD-002', date: '2024-02-14', status: 'SHIPPED',    total: 80,  items: [{ name: 'Basic Backpack', qty: 1, price: 35 }, { name: 'Classic Sneakers', qty: 1, price: 50 }] },
  { id: 'ORD-003', date: '2024-03-05', status: 'CONFIRMED',  total: 45,  items: [{ name: 'Simple Headphones', qty: 1, price: 45 }] },
  { id: 'ORD-004', date: '2024-03-20', status: 'PENDING',    total: 50,  items: [{ name: 'Classic Sneakers', qty: 1, price: 50 }] },
  { id: 'ORD-005', date: '2024-04-01', status: 'CANCELLED',  total: 55,  items: [{ name: 'Simple T-Shirt', qty: 1, price: 20 }, { name: 'Basic Backpack', qty: 1, price: 35 }] },
]

export default mockOrders
