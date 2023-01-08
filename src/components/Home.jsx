import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" srcset="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            est deleniti obcaecati ex nostrum eum. Exercitationem perspiciatis
            ex saepe eum nobis, perferendis dolor tempora. Non dicta architecto
            iusto distinctio fuga.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo odit
            quasi, dolor atque porro, iure, deserunt numquam rem officiis quidem
            adipisci vero assumenda provident accusamus cum beatae? Expedita
            quae dolorum, modi impedit repellat saepe fugit consectetur non
            error? Temporibus facere velit, iste eveniet possimus molestiae
            tempora cumque porro magni, dignissimos fuga reiciendis nihil
            deserunt vitae! Voluptatum dolorem itaque explicabo praesentium.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis vero tenetur debitis doloremque impedit incidunt
            aliquam ipsa fugit. Assumenda, dolorum?
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
