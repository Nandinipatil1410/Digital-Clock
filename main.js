
function updateclock()
{
    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = (hours % 12 || 12).toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);

    const timestring = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timestring;
}

updateclock();
setInterval(updateclock, 1000);