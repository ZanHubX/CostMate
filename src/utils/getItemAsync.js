const getItemAsync = (key) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const value = localStorage.getItem(key);
      resolve(value ? JSON.parse(value) : null);
    }, 0); // Simulating async behavior
  });
};

export default getItemAsync;
