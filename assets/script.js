var ip = "86.33.86.100";
var access_key = "6cff20186044ce2be984438909bddd97";

const fetchData = () => {
  fetch("http://api.ipstack.com/" + ip + "?access_key=" + access_key)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

http: fetchData();
