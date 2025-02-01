import React from 'react';

const categoriesTodos = [
  {id: 1, name: 'home'},
  {id: 2, name: 'work'},
  {id: 3, name: 'school'}
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
