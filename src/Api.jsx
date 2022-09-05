import axios from "axios";
import { useEffect, useState } from "react";


function Apifetch() {
  const [data, setData] = useState();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/search/users?q=sourav&page=1&per_page=20&order="asc"`
      )
      .then((res) => {
        console.log(res.data.items);
        setPosts(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div></div>;
}
export default Apifetch;
