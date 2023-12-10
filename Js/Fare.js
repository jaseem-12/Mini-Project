
    var error = document.getElementById('error');
    function calculateFare() {
        var fareDetails = {
            cityA: {
                cityA: 0,
                cityB: 10,
                cityC: 20,
                cityD:30,
                cityE:40,
                cityF:50,

            },
            cityB: {
                cityA: 10,
                cityB: 0,
                cityC: 10,
                cityD:20,
                cityE:30,
                cityF:40,
            },
            cityC: {
                cityA: 20,
                cityB: 10,
                cityC: 0,
                cityD:10,
                cityE:20,
                cityF:30,
            },
            cityD: {
                cityA: 30,
                cityB: 20,
                cityC: 10,
                cityD:0,
                cityE:10,
                cityF:20,
            },
            cityE: {
                cityA: 40,
                cityB: 30,
                cityC: 20,
                cityD:10,
                cityE:0,
                cityF:10,
            },
            cityF: {
                cityA: 50,
                cityB: 40,
                cityC: 30,
                cityD:20,
                cityE:10,
                cityF:0,
            },

        };

        var source = document.getElementById("source").value;
        var destination = document.getElementById("destination").value;
        var sourceFare = fareDetails[source];
        var fare = sourceFare[destination];
        error.innerHTML = "Your Calculated Fare is &#x20b9;"+ fare;

        var table = document.getElementById("fareTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.innerHTML = source;
        cell2.innerHTML = destination;
        cell3.innerHTML = fare;
    }

    function resetForm() {
        document.getElementById("source").selectedIndex = 0;
        document.getElementById("destination").selectedIndex = 0;
        error.textContent = ""

    }