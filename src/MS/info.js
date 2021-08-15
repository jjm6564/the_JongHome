import React from 'react'
import "./info.css"
import aa from "./images/aa.png"
import queryString from 'query-string';

const info = ({location,match}) => {
    const query = queryString.parse(window.location.search);
    
    return (
        <main>
            <div className="menu">
                <h2>호텔신라 소개</h2>
                <ul>
                    <li>개요</li>
                    <li>서울신라호텔</li>
                    <li>제주신라호텔</li>
                    <li>신라모노그램</li>
                    <li>신라스테이</li>
                    <li>수상이력</li>
                </ul>
            </div>
            <div className="contents">
                <div className="contents_title">
                    <h3>개요</h3>
                    <span>home > About the Shilla > Overview</span>
                </div>
                <div className="contents_main">
                    <img alt="밍숭" src={aa}/>
                    <table border="1">
                        <tr>
                            <th>Samsung Group Affiliate</th>
                        </tr>
                    </table>
                    <img alt="밍숭" src={aa}/>
                    <table border="1">
                        <tr>
                            <th>The Best Hospitality Company</th>
                        </tr>
                        <tr>
                            <th>Vision</th>
                        </tr>
                    </table>
                    <img alt="밍숭" src={aa}/>
                    <table border="1">
                        <tr>
                            <th>Mission</th>
                        </tr>
                    </table>
                    <img alt="밍숭" src={aa}/>
                    <table border="1">
                        <tr>
                            <th>Core Value Pride Of The Shilla</th>
                        </tr>
                    </table>
                </div>
            </div>
        </main>
    )
}

export default info