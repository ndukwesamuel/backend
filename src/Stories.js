import React, { useEffect, useState } from "react";
import "./Stories.css";
import cartItems from "./test";

// let url = "http://127.0.0.1:9000";

const Stories = () => {
  const [first, setfirst] = useState([]);
  const get_data = async () => {
    //   fetch("http://127.0.0.1:9000/stories")
    //     .then((res) => res.json())
    //     .then((json) => console.log(json));
    // };
    const res = await fetch("http://127.0.0.1:9000/stories");
    const data = await res.json();
    console.log(data);
    setfirst(data);
  };

  useEffect(() => {
    get_data();

    return () => {};
  }, []);

  return (
    <div>
      <section className="you-have-a-story d-lg-flex justify-content-between">
        <div>
          <h2>
            You've got a story, Post<span>it</span>.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            sapiente temporibus ducimus inventore laborum, laudantium tenetur
            nihil facere consequuntur mollitia saepe nulla doloribus minima in
            accusamus iste tempore reprehenderit cumque?
          </p>
          <input type="text" placeholder="Email address" />
          <button>Get Started</button>
        </div>
        <div>
          <img src="./Images/unsplash_Z2bJeJQRbW0.png" alt="" />
        </div>
      </section>
      <section className="stories container row">
        {cartItems.map((i) => {
          return (
            <section className="story-one col-lg-4">
              <img src={i.img} alt="" />
              <h6></h6>
              <h5></h5>
              <pre>By Maria Davies - June 5, 2022</pre>
              <p></p>
              <a href="">Read More...</a>
            </section>
          );
        })}
      </section>
    </div>
  );
};

export default Stories;
