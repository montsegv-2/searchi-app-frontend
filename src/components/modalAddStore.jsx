"use client";

const ModalAddStore = ({ onClose }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-white p-10 rounded-lg">
      <form className="w-full max-w-lg space-y-4">
        <div>
          <label htmlFor="name" className="text-[20px] mt-3 font-bold mb-3">
            Store Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-5 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-[20px] mt-3 font-bold mb-3">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="image" className="text-[20px] mt-3 font-bold mb-3">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
          />
        </div>

        <div className="flex gap-4 mt-2 ">
          <div>
            <label htmlFor="image" className="text-[20px] mt-3 font-bold mb-3">
              Longitude
            </label>
            <input
              type="text"
              id="image"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="image" className="text-[20px] mt-3 font-bold mb-3">
              Latitude
            </label>
            <input
              type="text"
              id="image"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="mr-3 bg-black text-white px-4 py-2 rounded-lg text-[20px]"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-pink-200 text-black px-4 py-2 rounded-lg text-[20px]"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ModalAddStore;
