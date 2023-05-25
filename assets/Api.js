class Api {
  constructor() {
    this.fetchData(this.ip, this.access_key);
  }

  async fetchData() {
    try {
      let ip = "86.33.86.100";
      let access_key = "327772b704fb82b47aef8cbcb02f5990";
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
