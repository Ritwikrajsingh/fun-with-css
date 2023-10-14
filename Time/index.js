const Week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const updateTime = () => {
    let now = new Date()

    document.getElementById("date").innerText = `${now
        .toLocaleDateString()
        .split("/")
        .reverse()
        .join("-")} ${Week[now.getDay()]}`;

    document.getElementById("time").innerText = `${[
        zeroPadding(now.getHours(), 2),
        zeroPadding(now.getMinutes(), 2),
        zeroPadding(now.getSeconds(), 2),
    ].join(":")}`;
}

const zeroPadding = (num, digit) => {
    return String(num).padStart(digit, "0")
}

updateTime()
setInterval(updateTime, 1000)