import React from 'react';

const LCodeConfigurator = ({data}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full h-[55vh] max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">L-Code</h2>
          <button onClick={() => data.setShowL(false)}className="text-white text-2xl rounded-md  bg-black w-10 h-10 hover:bg-white hover:text-black hover:border-[2px]">&times;</button>
        </div>
        <div className="flex">
          <div className="w-1/2 pr-4">
            <h3 className="text-lg font-semibold">No configuration available
            </h3>
            <p className="text-gray-600 mb-12">
            Since there is no specific car selected at the moment LCode generation is not possible. Please, try again after you started a configuration.
            </p>
            <button className="mt-4 bg-gray-300 px-16 text-gray-700 cursor-pointer py-2 rounded hover:bg-gray-400">
            CONTACT DEALER
            </button>
          </div>
          <div className="w-1/2 pl-4 border-l border-gray-300">
            <h3 className="text-lg font-semibold">Load a configuration
            </h3>
            <p className="text-gray-600 ">
            Use an L-Code to edit a previous configuration
            </p>
            <input
              type="text"
              placeholder="Insert L-Code here"
              className="mt-2 w-full mb-[72px] px-4 py-2 border text-sm border-gray-300 rounded"
            />
            <button className="mt-4 bg-gray-300 text-gray-700 px-16 cursor-pointer ml-3 py-2 rounded hover:bg-gray-400">
            LOAD CONFIGURATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LCodeConfigurator;
