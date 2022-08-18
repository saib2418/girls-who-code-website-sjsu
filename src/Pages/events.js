import React from 'react'
import './pages.css';

function Events() {
    return (
        <div className="content">
            <h1 className="content-header" id='events'>Events</h1>

            <div className="calendar">
                <iframe src="https://calendar.google.com/calendar/embed?src=9mn82d4tb2qlmq89j0hdbp7ro8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                    title="Google calendar"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no">
                </iframe>
            </div>
        </div>
    )
}

export default Events;