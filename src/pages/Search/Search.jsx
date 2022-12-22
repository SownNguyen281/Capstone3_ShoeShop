import React from 'react'

export default function Search() {

  const handleSubmit = async (e) =>{
    e.preventDefault();
  }



  return (
    <div className='container search' onChange={handleSubmit}>
      <div className="search-form">
      <h2>Search</h2>
      <div className="form-content">
        <div className="form-group ">         
          <input
            className="form-control"
            id="keyword"
            name="keyword"
            placeholder="Product Name"
          />
          <p className="text text-danger">Validation</p>
        </div>
        <div className="form-btn">
            <button className="btn mt-2 btn-success" type="submit">
              SEARCH
            </button>
          </div>
        </div>
      </div>
      
      <div className="search-result">
        <h2>Search Result</h2>
        
      </div>

    </div>
  )
}
