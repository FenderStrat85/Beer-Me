const apiService: { [key: string]: any } = {};

apiService.getByCity = (city: string) => {
  return fetch(`${process.env.REACT_APP_BREWERY_DB}/?by_city=${city}`)
    .then((res) => res.json())
    .catch((error) => console.log("Error", error));
};

export default apiService;
