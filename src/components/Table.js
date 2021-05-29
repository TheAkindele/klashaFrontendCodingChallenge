import React from 'react'

export const Table = () => {
    const tableData = [
        {id: "KLA12578DHQ", source: "Vel pellentesque ornare", date: "25th November, 2020", amount: "$1,200"},
        {id: "KLA12578DHQ", source: "Vel pellentesque ornare", date: "25th November, 2020", amount: "$1,200"},
        {id: "KLA12578DHQ", source: "Vel pellentesque ornare", date: "25th November, 2020", amount: "$1,200"},
        {id: "KLA12578DHQ", source: "Vel pellentesque ornare", date: "25th November, 2020", amount: "$1,200"},
    ]

    return (
        <div className="table">
            <ul className="table-header" id="head">
                <li>Payment ID</li>
                <li>Source</li>
                <li>Date</li>
                <li id="amount">Amount</li>
            </ul>
            <ul >
                {tableData.map(({id, source, date, amount}, i) => (
                    <div key={i} className="table-header" id="body">
                    <li>{id}</li>
                    <li>{source}</li>
                    <li>{date}</li>
                    <li id="amount">{amount}</li>
                    </div>
                ))}
            </ul>
            <div id="more">See more</div>
        </div>
    )
}
