import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index1.css";
import App1 from "./App1";
// import ProbStar from "./probStar";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from './reportWebVitals';
function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onRatings={setMovieRating} />
      <p>This movie was rated {movieRating} status</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={4}
      size={23}
      color="red"
      className="test"
      defaultRating={2}
    />
    <Test /> */}
    {/* <ProbStar maxRating={5} /> */}
    <App1 />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
