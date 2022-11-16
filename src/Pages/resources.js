import React from "react";
import styled, { css } from "styled-components";
import "./pages.css";

function Resources() {
  return (
    <div className="content">
      <h1 id="resources"></h1>
      <div class="podcast">
        <h1> introducing it-girl.... </h1>
        <br></br>
        <iframe
          title="Spotify Podcast"
          src="https://open.spotify.com/embed/show/4m0PYMgE0wYpZGb8TLRieZ?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"></iframe>
        <p>
          {" "}
          <br></br> We have finally launched one of the many aspects of our
          organization, our podcast: IT GIRL!!!! <br></br> <br></br> No for Now
          ft. Twiiter is an episode featuring Anh Thuc Tran, a senior software
          engineer, and Edward Wang, a staff UI/ UX engineer at Twitter. They
          share valuable tips for starting as a coder and how essential it is to
          advocate for yourself. As students, we find ourselves extremely
          focused on acing the technical portions, but building confidence and
          displaying the enthusiasm to learn is also imperative.{" "}
        </p>
      </div>
      <div class="flex-container">
        <div class="flex-box">
          <h3>Must Reads</h3>
          <ul>
            <li>
              <a
                class="list"
                href="https://www.amazon.com/Cracking-Coding-Interview-Gayle-McDowell/dp/0984782850/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=careercup-ctciwebsite-20&linkId=173f3d8878a1d7f0d131a85fbfc9f67f"
                target="_blank">
                Cracking the Coding Interview Book
              </a>
            </li>
            <li>
              <a
                class="list"
                href="https://www.amazon.com/Technically-Wrong-Sexist-Algorithms-Threats/dp/1681688611"
                target="_blank">
                Technically Wrong: Sexist Apps, Biased Algorithms, and Other
                Threats of Toxic Tech
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-box">
          <h3>Opportunities</h3>
          <ul>
            <li>CS Research: contact ben.reed@sjsu.edu </li>
            <li>
              {" "}
              <a
                class="list"
                href="https://boards.greenhouse.io/soundhoundinc/jobs/6365344002"
                target="_blank">
                SoundHound SWE Intern
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resources;
