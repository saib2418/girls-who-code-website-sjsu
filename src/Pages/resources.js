import React from 'react';
import './pages.css';

function Resources() {
    return (
        <div className="content">
            <h1 className="content-header" id='resources'>Resources</h1>

            <div class="corner-box-container">

                <div class="corner-box">
                    <h3>Scholarships & Programs</h3>
                    <br></br>
                    <ul>
                        <li>item 1</li>
                        <li>item 2 </li>
                        <li>item 3 </li>
                    </ul>
                </div>

                <div class="corner-box">
                    <h3>Must Reads</h3>
                    <br></br>
                    <ul>
                        <li>item 1</li>
                        <li>item 2 </li>
                        <li>item 3 </li>
                    </ul>
                </div>

                <div class="corner-box">
                    <h3>Similar Orgs</h3>
                    <br></br>
                    <ul>
                        <li>item 1</li>
                        <li>item 2 </li>
                        <li>item 3 </li>
                    </ul>
                </div>
            </div>
        </div>

    );
}

export default Resources;