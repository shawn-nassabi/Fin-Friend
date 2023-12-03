// components/CurrencyDropdown.js

const CurrencyDropdown = ({ onChange, selectedCurrency }) => {
  const currencyOptions = ["USD", "EUR", "GBP", "JPY", "CAD"]; // Add more currencies as needed

  return (
    <select
      value={selectedCurrency}
      onChange={onChange}
      className="h-[50px] w-fit my-auto mx-2 rounded-lg text-[20px]"
    >
      {currencyOptions.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
