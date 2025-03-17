import React from "react";

function Name() {
  const cities = ["davao city", "kidapawan city", "tagum city", "panabo city"];

  const newCities = cities.filter((city) => city != "davao city");

  const person = [
    {
      id: 0,
      name: "kit ocampo",
      age: 45,
    },
  ];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {newCities.map((city, index) => (
          <li className="list-group-item" key={index}>
            {city}
          </li>
        ))}
      </ul>
      <hr />

      {person.length > 0 && (
        <div>
          {" "}
          <h1>Table</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {person.map((personInfo) => {
                return (
                  <tr key={personInfo.id}>
                    <td>{personInfo.id}</td>
                    <td>{personInfo.name}</td>

                    <td>{personInfo.age < 20 ? "teens" : "matured"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Name;
