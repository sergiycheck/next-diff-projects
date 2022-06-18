const endpoints = {
  base: "https://jsonplaceholder.typicode.com",
  get posts() {
    return `${this.base}/posts`;
  },
};
export default endpoints;
