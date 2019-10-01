import React, { useEffect, useState } from "react"
//  When the itinerary for the current customer is listed, put a delete button next to each link.
// When that button
// is clicked, present a confirmation dialog with Yes/No buttons in it. If the user
// presses yes, send a DELETE
// request to the API to remove that itinerary item.

// When the itinerary for the current customer is listed, put an edit button next
// to each link. When that button is clicked, present a dialog that lets the user
// enter in a new time for that itinerary item and has an Update button in it. When
// the update button is clicked, send a PUT request to the API to update the starttime
//  attribute of that itinerary item.


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
const deleteFromItinerary = (id) => {

    if(window.confirm("Are you sure you want to Delete this?")){
        fetch(`http://localhost:8000/itineraryitems/${id}`, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                },
            })
                .then(() => {
                    // Fetch the data from localhost:8000/itineraryitems
                    fetch("http://localhost:8000/itineraryitems", {
                        "method": "GET",
                        "headers": {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                            "Authorization": `Token ${localStorage.getItem("kennywood_token")}`
                        }
                    })
                    // Convert to JSON
                    .then(response => response.json())
                    // Store itinerary items in state variable
                    .then(setItineraryList)
                })
            }
        }




    return (
        <>
            <h2>What I Want to Do on Saturday</h2>
            <ul>
                {
                    itineraryList.map((item) => {
                        return <li key={item.id}>
                            {item.attraction.name} at {item.starttime}
                            <button>edit</button>
                            <button
                             onClick={() => deleteFromItinerary(item.id)}
                            >delete</button>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default MyItinerary