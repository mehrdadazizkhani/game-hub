import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d7d4b753dab54b5ba880111e6e862075",
  },
});
