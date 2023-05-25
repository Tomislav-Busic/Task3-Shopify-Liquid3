class Api {
  constructor() {
    this.fetchData(this.ip, this.access_key);
  }

  async fetchData() {
    try {
      let ip = "86.33.86.100";
      let access_key = "c9a9f70ecacedbff3687630659c0a95d";
      const response = await fetch(
        `http://api.ipstack.com/${ip}?access_key=${access_key}`
      );
      const data = await response.json();

      localStorage.setItem("country", data?.country_name);

      return data;
    } catch (e) {
      console.log(e);
    }
  }
}
