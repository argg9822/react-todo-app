import React from 'react';

function useLocalStorage(itemName, defaultValue){
  let itemLocalStorage = JSON.parse(localStorage.getItem(itemName));

  if (!itemLocalStorage) {
    localStorage.setItem(itemName, JSON.stringify(defaultValue));
    itemLocalStorage = defaultValue;
  }

  const [item, setItem] = React.useState(itemLocalStorage);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

export { useLocalStorage };
