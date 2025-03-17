import React from "react";

function HandlingEvents() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.fname.value);
    console.log(e.target.elements.lname.value);
  };

  return (
    <>
      <form action="" className="w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="fname"
            placeholder="enter first name"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            name="lname"
            placeholder="enter lastname"
          />
        </div>

        <button className="btn btn-success">Submit</button>
      </form>
    </>
  );
}

export default HandlingEvents;
