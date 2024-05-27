export const getStores = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/stores");

  const stores = await response.json();
  return stores;
};

//created functions
