import React from "react";

import DevItem from "./../../components/DevItem/DevItem";

const Devs = ({ Devs }) => {
  const DevsList = Devs?.map((dev, index, Devs) => (
    <div key={dev.username}>
      <DevItem dev={dev} />
      {index !== Devs.length - 1 ? <hr /> : null}
    </div>
  ));

  return <ul>{DevsList}</ul>;
};

export default Devs;
