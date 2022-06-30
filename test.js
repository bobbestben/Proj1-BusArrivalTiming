// Get temporary access to cors here first:
// https://cors-anywhere.herokuapp.com/corsdemo

let busArrivalUrl = "https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg"+
        "ltaodataservice/BusArrivalv2?BusStopCode="

    
    //Update fetch URL query parameter based on search input
    busArrivalUrl += "01013"
    let dataBusArrival = null
    //Get Temporary access to proxy to avoid cors error when fetching here:
    //https://cors-anywhere.herokuapp.com/corsdemo

    //Fetch Bus Arrival Data
    // fetch(busArrivalUrl, {
    //     method: 'GET',
    //     headers: {
    //       'AccountKey': 'c5SCu1KNQ4OsnpfU+wxoyg=='
    //     }
    // })
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(jsonData => {
    //         dataBusArrival = jsonData
    //         console.log(dataBusArrival)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })


         //API Portion - KIV

          //-------------------------------------------------------------------
          // Get temporary access to cors here first:
          // https://cors-anywhere.herokuapp.com/corsdemo
          
          
          async function fetchDataAsync(url) {
              try {
          
                  const response = await fetch(url, {
                      method: 'GET',
                      headers: {
                        'AccountKey': 'c5SCu1KNQ4OsnpfU+wxoyg=='
                      }
                    });
          
                  console.log(response)
          
                  const data = await response.json()
                  console.log(data)
          
              } catch(ex) {
                  console.log(ex)
              }
          }
          // fetchDataAsync("https://api.opendota.com/api/teams")
          // fetchDataAsync("http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")
          fetchDataAsync("https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=83139")
          //-------------------------------------------------------------------------------------------------------
          