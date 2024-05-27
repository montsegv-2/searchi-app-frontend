export const getStores = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stores/`
  );

  const stores = await response.json();
  return stores;
};

//created functions

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
