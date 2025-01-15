export const saveToLocalStorage = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error saving to local storage", error);
    }
  };
  
  export const loadFromLocalStorage = (key) => {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : undefined;
    } catch (error) {
      console.error("Error loading from local storage", error);
      return undefined;
    }
  };

  
  