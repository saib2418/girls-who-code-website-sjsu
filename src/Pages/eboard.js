import styled, { css } from "styled-components";
import React, { useState } from "react";
import "./pages.css";
import sai from "../img/sai.jpeg";
import manu from "../img/man.JPG";
import yasesvi from "../img/yas.JPG";
import taylor from "../img/tay.JPG";
import m from "../img/mr.JPG";
import push from "../img/push.jpeg";
import fern from "../img/fern.jpeg";

const Eboard = () => {
  const Title = styled.h1`
    color: white;
    padding: 30px;
    margin: 30px;
  `;

  const position = styled.code`
    color: white;
  `;

  const [show, setShow] = useState(true);

  return (
    <div className="content">
      <Title id="eboard"> executive board </Title>
      <div class="gallery">
        <div>
          <div>
            {/* // onMouseEnter={() => setShow(true)}
          // onMouseLeave={() => setShow(false)} */}
            <img src={sai} width="300" height="200"></img>
            <p class="position">
              sai bharathula <br></br>president
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={manu} width="300" height="200"></img>
            <p class="position">
              manogya bharathula <br></br> external vice president
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={push} width="300" height="200"></img>
            <p class="position">
              pushpal patil <br></br> internal vice president
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={taylor} width="300" height="200"></img>
            <p class="position">
              taylor trinidad <br></br>treasurer
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={m} width="300" height="200"></img>
            <p class="position">
              mrudhvika sirineni <br></br>social media director
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={yasesvi} width="300" height="200"></img>
            <p class="position">
              yasesvi punnuganti <br></br>secretary
            </p>
          </div>
        </div>

        <div>
          <div>
            {/* onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}> */}
            <img src={fern} width="300" height="200"></img>
            <p class="position">
              fernanda palacios <br></br>events director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eboard;
