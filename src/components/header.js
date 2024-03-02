const url = "https://api.frankfurter.app/latest";
const fetchCurrencies = fetch(url)
  .then((resp) => resp.json())
  .catch((err) => console.log(err));

export { fetchCurrencies };
