import React from "react";
export default function Pet({ name, animal, breed }) {
  const x = name.toUpperCase(); //in {}, expression is allowed, statement not.
  //in this case this whole x = name... is a statement while name.toUpperCase() is expression.
  //ternary operators are expression so allowed
  return (
    <div>
      <h1>{x}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
