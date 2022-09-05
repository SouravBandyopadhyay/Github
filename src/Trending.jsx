import "./Trending.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Trending() {
  const [posts, setPosts] = useState([]);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5f6fbc43c7msh7b2892562f48991p1a0887jsn43b5969c2659",
      "X-RapidAPI-Host": "github-trending.p.rapidapi.com",
    },
  };
  const getAPI = () => {
    fetch(
      "https://github-trending.p.rapidapi.com/developers?language=rust&since=daily",
      options
    )
      .then((response) => response.json())
      .then(
        (response) => setPosts(response)
        //console.log(response)
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="trending_comp">
      <p id="trending_heading">Trending Developers</p>
      <div>
        {posts.map((el) => (
          <div key={el.id} id="individual_box">
            <div className="avatar_box">
              <div className="avatar_box_name">
                {" "}
                <p>
                  <i>
                    <strong>{el.name}</strong>
                  </i>
                </p>
              </div>
              <div className="avatar_img_card">
                <img src={el.avatar} alt="" srcset="" />
              </div>
            </div>
            <a href={el.url}>Check Profile</a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Trending;
