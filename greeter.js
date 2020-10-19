let greetedUsers = [], greetQueue = [], ignoredUsers = [], field, greeting = false;

window.addEventListener('onWidgetLoad', (obj) => {
    alert = document.getElementById("alert");
    field = obj.detail.fieldData;
    ignoredUsers.push("100135110");
});

window.addEventListener('onEventReceived', (obj) => {
    const listener = obj.detail.listener;
    const data = obj.detail.event.data;

    if(listener === "message") {
        if(greetedUsers.includes(data.userId) || ignoredUsers.include(data.userId)) return;

        greetQueue.push(data.userId);
        greet();
    }
});

let greet = () => {
    if (greeting || !greetQueue.length) return;
    const user = greetQueue.pop();
    greeting = true;

    let alert= new Audio(field.alert);
    alert.volume=field.alertVolume/100;
    alert.play();
    setTimeout(() => {
        greeting = false;
        greet();
    }, field.widgetDuration * 1000);
    
    greetedUsers.push(user);
}