import React from "react";

const StatisticBoard = function (props) {
        
    return (
        <div className="statistic_board">
            <span className="statistic">All: {props.data.length}</span>
            <span className="statistic green">Read: {props.data.filter((book) => book.isRead).length}</span>
            <span className="statistic darkred">Not read: {props.data.filter((book) => !book.isRead).length}</span>
        </div>
    )
}

export default StatisticBoard;