import { useStockDataContext } from "../../context/data/stock-data";

export const StockInformation = () => {
  const { data, stock } = useStockDataContext();

  const matchStock = (open, close) => {
    return (open / close) * 100 - 100;
  };

  const length = data.length;

  return (
    <>
      {data.slice(length - 1, length).map((x, index) => (
        <>
          <div key={x.time + index + x.open} className="flex flex-row gap-2">
            <h3 className="text-white text-25 font-bold">{stock}</h3>
            <div
              className={`rounded-xl p-[0.5px] w-[100px] flex items-center justify-center  ${
                x.close < x.open ? "bg-[#ff8585]" : "bg-[#adf09a]"
              }`}
            >
              <h4 className="text-black text-20 font-bold text-center">
                {x.close > x.open ? "+" : ""}
                {matchStock(x.close, x.open).toFixed(2)}
              </h4>
            </div>
          </div>
          <p className="text-white text-18 mt-1">{x.time}</p>
        </>
      ))}
    </>
  );
};
