import React, { useEffect, useState } from "react"


const MyItinerary = props => {
    const [itineraryList, setItineraryList] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/itineraryitems", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
            }
        })
        // Convert to JSON
        .then(response => response.json())

        .then(setItineraryList)
        }, [])

    // Create HTML representation with JSX
    return (
        <>
            <h2>What I Want to Do on Saturday</h2>
            <ul>
                {
                    itineraryList.map((item) => {
                        return <li>
                            {item.attraction.name} at {item.starttime}
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default MyItinerary