import styled, { css } from "styled-components";
import React from "react";
import "./pages.css";

function Events() {
  const Title = styled.h1`
    color: white;
    padding: 20px;
    margin: 20px;
  `;
  const Calendar = styled.div`
    margin-top: 80px;
    color: black;
  `;
  return (
    <div className="content">
      <Title id="events"> events </Title>
      <Calendar>
        <iframe
          class="calendar"
          src="https://calendar.google.com/calendar/embed?src=9mn82d4tb2qlmq89j0hdbp7ro8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
          title="Google calendar"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"></iframe>
      </Calendar>

      <div class="btn-container">
        <a
          href="https://calendar.google.com/calendar/u/0?cid=OW1uODJkNHRiMnFsbXE4OWowaGRicDdybzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ"
          target="_blank">
          <button class="btn">
            <span>add event to your calendar</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Events;
