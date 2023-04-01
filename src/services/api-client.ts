import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d3711183e9394fbbac3f6648edd7b832",
  },
});
