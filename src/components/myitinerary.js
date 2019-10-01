import React, {useEffect, userState} from 'react'

const MyItinerary = props => {
    const [itinerary, setItineraryList] = userState([])

    useEffect(() => {
        fetch('http://localhost:8000/itineraryitems', {
            "method": "GET",
            'headers':

        })
        .then(response => response.json())
        .then(setItineraryList)
    },[])
    return(
        <>
          <h2> What I want to do one Saturday</h2>
          <ul>
              {
                  itineraryLis.map((item)=>{
                  return<li>
                      item.name

                  </li>

                  })
              }1
          </ul>
        </>
    )
}