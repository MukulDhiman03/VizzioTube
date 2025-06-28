import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex overflow-scroll w-[90vw]">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Live" />
      <Button name="Songs" />
      <Button name="Movies" />
      <Button name="Motivation" />
      <Button name="Gadgets" />
      <Button name="Electronics" />
      <Button name="Travel" />
      <Button name="GYM" />
      <Button name="Weather" />
      <Button name="Cars" />
      <Button name="Bikes" />
      <Button name="Railway" />
      <Button name="Food" />
      <Button name="OM" />
      <Button name="Bhakti" />
      <Button name="Cartoons" />
      <Button name="Anime" />
    </div>
  );
};

export default ButtonList;
