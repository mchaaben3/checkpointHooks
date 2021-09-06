import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function ButtonAdd(props) {
  const [showModal, setShowModal] = React.useState(false);
  const[newMovie, setNewMovie] = React.useState({
    title:"",
    description:"",
    posterURL:"",
    rating:0
  })

  const handleRateChange = (nextValue, preValue, name) => {
    setNewMovie({...newMovie,rating:nextValue})
  }
  const handleChange = (e) => {
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  const handleSave = ()=>{
    props.handleAddNewMovie(newMovie)
    setShowModal(false)
  }
  return (
    <>
      <button
        className="bg-gray-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add New Movie
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                  Add New Movie
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-900 h-6 w-6 text-2xl block  focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                              <div class="md:flex mt-5 mr-5 md:items-center mb-6">
                                  <div class="md:w-1/3">
                                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                         Title
                                      </label>
                                  </div>
                                  <div class="md:w-2/3">
                                      <input onChange={handleChange} name="title" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" placeholder="Add Title" />
                                    </div>
                                  </div>
                                  <div class="md:flex  mr-5 md:items-center mb-6">
                                  <div class="md:w-1/3">
                                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                         Description
                                      </label>
                                  </div>
                                  <div class="md:w-2/3">
                                      <textarea onChange={handleChange} name="description" class="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" placeholder="Add description" ></textarea>
                                  </div>
                                  </div>
                                  <div class="md:flex   mr-5 md:items-center mb-6">
                                  <div class="md:w-1/3">
                                      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                         Picture 
                                      </label>
                                  </div>
                                  <div class="md:w-2/3">
                                  <input onChange={handleChange} name="posterURL" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"  type="text" placeholder="Add URL" />

                                  </div>
                                  </div>
                                  <div class="md:flex  mr-5 md:items-center mb-6">
                                  <div class="md:w-2/3"></div>
                                  <div class="md:w-2/3">
                                  <StarRatingComponent
                                        name="rating"
                                        starCount={5}
                                     onStarClick={handleRateChange}
                                    /> 
                                  </div>
                                 
                                  </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-green-500 background-transparent active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleSave()}
                  >
                    Add Movie
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}