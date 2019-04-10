var state = "off";
var lapSave = 0;
var stopToken = 0;

function start() {
    if (state == "off") {
        document.getElementsByClassName("lap-button-disabled")[0].classList.remove('reset-button');
        document.getElementsByClassName("lap-button-disabled")[0].innerHTML = "Lap";
        this.startCount()
        enableLap.call();
        state = "on";
        count_is_on = 1;
        document.getElementsByClassName("start-button").onclick
        document.getElementsByClassName("start-button")[0].classList.add('stop-button');
        document.getElementsByClassName("start-button")[0].innerHTML = "Stop";

    }
    else {
        if (state == "on") {
            document.getElementsByClassName("lap-button-disabled")[0].classList.add('reset-button');
            document.getElementsByClassName("lap-button")[0].innerHTML = "Reset";
            state = "off";
            this.stopCount();
            count_is_on = 0;
            document.getElementsByClassName("stop-button")[0].classList.remove('stop-button');
            document.getElementsByClassName("start-button")[0].innerHTML = "Start";
        }

    }
};

function enableLap() {

    document.getElementsByClassName("lap-button-disabled")[0].classList.add('lap-button');
    document.getElementsByClassName("lap-button").disabled = false;



};







function startCount() {
    var startTime = Date.now();
    var interval = setInterval(function () {
        var elapsedTimeST = 00;
        var elapsedTimeS = 00;
        var elapsedTimeM = 00;
        var elapsedTimeH = 00;
        var elapsedTimeD = 00;
        var elapsedTimeMS = Date.now() - startTime;

        elapsedTimeST = ("0" + (parseInt(elapsedTimeMS / 10) % 100)).slice(-2);
        document.getElementById("hundred").innerHTML = elapsedTimeST;

        elapsedTimeS = ("0" + (parseInt(elapsedTimeMS / 1000) % 60)).slice(-2);
        document.getElementById("second").innerHTML = elapsedTimeS;

        elapsedTimeM = ("0" + (parseInt(elapsedTimeMS / 60000) % 60)).slice(-2);
        document.getElementById("minute").innerHTML = elapsedTimeM;

        elapsedTimeH = ("0" + (parseInt(elapsedTimeMS / 3600000) % 24)).slice(-2);
        document.getElementById("hour").innerHTML = elapsedTimeH;

        elapsedTimeD = ("0" + (parseInt(elapsedTimeMS / (3600000 * 24)) % 365)).slice(-3);
        document.getElementById("day").innerHTML = elapsedTimeD;
        

    })
}

function stopCount() {

    count_is_on = 1;

}

function setLap() {

};

function resetCount() {
    elapsedTimeST = 00;
    elapsedTimeST = 00;
    elapsedTimeS = 00;
    elapsedTimeM = 00;
    elapsedTimeH = 00;
    elapsedTimeD = 00;
}