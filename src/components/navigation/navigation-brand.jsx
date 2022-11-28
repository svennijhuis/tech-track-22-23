import { CircleButton, InputBrand } from "./input-brand";
import { useState } from "react";
import { useStockDataContext } from "../../context/data/stock-data";
import { Apple } from "../../images/icons/apple";
import { Google } from "../../images/icons/google";
import { Amazon } from "../../images/icons/amazon";
import { Tesla } from "../../images/icons/tesla";

export const Navigation = () => {
  const { setStock } = useStockDataContext();

  const onChangeValue = (event) => {
    setStock(event.target.value);
    console.log(event.target.value);
  };

  return (
    <>
      <div className="container flex justify-around flex-row my-6 items-center md:w-1/2">
        <InputBrand name="aapl" onChangeValue={onChangeValue}>
          <Apple />
        </InputBrand>
        <InputBrand name="tsla" onChangeValue={onChangeValue}>
          <Tesla />
        </InputBrand>
        <InputBrand name="googl" onChangeValue={onChangeValue}>
          <Google />
        </InputBrand>
        <InputBrand name="amzn" onChangeValue={onChangeValue}>
          <Amazon />
        </InputBrand>
      </div>
    </>
  );
};
