// menuItems.ts
export type MenuItem = {
    id: number;
    name: string;
    description: string;
    course: 'Starters' | 'Main Course' | 'Dessert';
    price: number;
  };
  
  // Initial menu items array
  let menuItems: MenuItem[] = [
    { id: 1, name: 'Kebabs', description: 'Grilled meat skewers', course: 'Starters', price: 8.99 },
    { id: 2, name: 'Burger', description: 'Beef burger with cheese', course: 'Main Course', price: 12.99 },
    { id: 3, name: 'Malva Pudding', description: 'South African pudding', course: 'Dessert', price: 6.99 },
  ];
  
  // Functions to manage menu items
  export const getMenuItems = () => menuItems;
  
  export const addMenuItem = (item: MenuItem) => {
    menuItems = [...menuItems, { ...item, id: Date.now() }];
  };
  
  export const editMenuItem = (updatedItem: MenuItem) => {
    menuItems = menuItems.map(item => (item.id === updatedItem.id ? updatedItem : item));
  };
  
  export const deleteMenuItem = (id: number) => {
    menuItems = menuItems.filter(item => item.id !== id);
  };