let greetedUsers, field, alert;

window.addEventListener('onWidgetLoad', (obj) => {
    alert = document.getElementById("alert");
    field = obj.detail.fieldData;
    greetedUsers = [];
});

window.addEventListener('onEventReceived', (obj) => {
    const listener = obj.detail.listener;
    const data = obj.detail.event;

    if(listener === "message") {

        if(!greetedUsers.includes(data.nick)) {
            greetedUsers.push(data.nick);

            alert.innerHTML = `<audio id="audio" autoplay hidden src="${field.alert}"></audio>`;
            document.getElementById('audio').volume = field.alertVolume / 100;
        }
    }
});