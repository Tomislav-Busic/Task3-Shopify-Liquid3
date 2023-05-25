let placeForTemplate = document.getElementById("geolocation");
let userData = [];

const fetchData = async () => {
  let userData = new Api();
  userData = await userData.fetchData();
  console.log(userData);
  displayData(userData);
};

const displayData = (userData) => {
  template_geolocation = geolocation.innerHTML;

  template_geolocation = template_geolocation.replaceAll(
    "${countryName}",
    countryName
  );
  template_geolocation = template_geolocation.replaceAll(
    "${lat}",
    userData?.latitude
  );
  template_geolocation = template_geolocation.replaceAll(
    "${long}",
    userData?.longitude
  );

  placeForTemplate.innerHTML = template_geolocation;
};

fetchData();
