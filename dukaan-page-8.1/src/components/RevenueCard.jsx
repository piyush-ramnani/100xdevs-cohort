export const RevenueCard = ({ title, amount, orderCount }) => {
  return (
    <div className="bg-white rounded shadow-md p-4">
      <div className="text-gray-600 text-sm">{title} ?</div>
      <div className="flex  justify-between items-center pt-2">
        <h3 className="text-xl font-semibold">Rs. {amount}</h3>
        {orderCount ? (
          <a href="#" className="underline text-blue-600 hover:text-blue-800">
            {orderCount} orders {">"}
          </a>
        ) : null}
      </div>
    </div>
  );
};
