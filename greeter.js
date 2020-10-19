let greetedUsers, field, alert;

window.addEventListener('onWidgetLoad', (obj) => {
    alert = document.getElementById("alert");
    field = obj.detail.fieldData;
  	greetedUsers = [];
    greetedUsers.push("100135110");
});

window.addEventListener('onEventReceived', (obj) => {
    const listener = obj.detail.listener;
    const data = obj.detail.event.data;

    if(listener === "message") {

        if(!greetedUsers.includes(data.userId)) {
            greetedUsers.push(data.userId);

            alert.innerHTML = `<audio id="audio" autoplay hidden src="${field.alert}"></audio>`;
            document.getElementById('audio').volume = field.alertVolume / 100;
        }
    }
});