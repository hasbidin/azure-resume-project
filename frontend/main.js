window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'https://fa20220727x01.azurewebsites.net/api/HttpTrigger1?code=WFNVG8d_MwDepgY3eIpRXe72mxjPFKDbPl4TPYCCLxpRAzFurEunOg=='; 

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}