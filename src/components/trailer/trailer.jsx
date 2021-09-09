import React, { useState } from "react";

const Trailer = ({ data, history, match, showing }) => {
  const [show, setshow] = useState(showing);
  var details = data.find((elem) => elem.id == match.params.id);

  return (
    <>
      {details && (show || showing) && (
        <div className="max-w-sm bg-white rounded overflow-hidden shadow-lg fixed left-1/4 top-1/4   py-10 max-h-xl  bg-hero-pattern  max-w-xl ">
          <button
            type="button"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-black hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={() => history.push('/')}
        >
            <span className="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <iframe
            width="540"
            height="250"
            src={details.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />{" "}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Trailer</div>
            <p className="text-gray-700 text-base">{details.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Trailer;
