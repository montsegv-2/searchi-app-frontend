//get all
export const getStores = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores/`
  );

  const stores = await response.json();
  return stores;
};

//delete
export const deleteStore = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/store/${id}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to delete the store");
  }

  const result = await response.json();
  return result;
};

// create
export const createStore = async (storeData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/store/`,
    {
      method: "POST",
      body: JSON.stringify(storeData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to create the store");
  }

  const newStore = await response.json();
  return newStore;
};
