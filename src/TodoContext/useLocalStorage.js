import React from 'react';

const categoriesTodos = [
  {id: 1, name: 'hogar'},
  {id: 2, name: 'trabajo'},
  {id: 3, name: 'escuela'},
  {id: 4, name: 'personal'},
  {id: 5, name: 'familia'},
  {id: 6, name: 'compras'},
  {id: 7, name: 'pasatiempos'},
  {id: 8, name: 'otros'},
];

function useLocalStorage(itemName, defaultValue){
  
  const [item, setItem] = React.useState(defaultValue);
  const [categories, setCategories] = React.useState(categoriesTodos);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        let itemLocalStorage = JSON.parse(localStorage.getItem(itemName));
  
        if (!itemLocalStorage) localStorage.setItem(itemName, JSON.stringify(defaultValue))
        else setItem(itemLocalStorage);
  
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, defaultValue] );

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return {
    item, 
    saveItem,
    loading,
    error,
    categories,
  };
}

export { useLocalStorage };
