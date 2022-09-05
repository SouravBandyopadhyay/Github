import React from "react";
import "./DisplayCard.css";
function DisplayCard({ data }) {
  // console.log(data[14].login);
  return (
    <div className="master">
      <h1 id="result_title">Result Will be displayed Below</h1>
      {data.map((el) => (
        <div className="result_box">
          <div className="result_details">
            <h2>
              Github Username: <u>{el.login}</u>{" "}
            </h2>
            <p>Search ID: {el.id}</p>
            <p>
              {" "}
              <i>Profile Link:</i>{" "}
              <strong>
                {" "}
                <a href={el.html_url}>Checkout</a>
              </strong>
            </p>
          </div>
          <div className="result_img">
            <img className="img" src={el.avatar_url} alt={el.login} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayCard;
