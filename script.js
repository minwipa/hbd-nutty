function openGift(){

    document.querySelector(".hero").style.display = "none";

    document.getElementById("gift").classList.remove("hidden");

}

function submitForm(){

    let days = [];
    let times = [];

    document.querySelectorAll(".day:checked").forEach(item=>{
        days.push(item.value);
    });

    document.querySelectorAll(".time:checked").forEach(item=>{
        times.push(item.value);
    });

    fetch(
    "https://script.google.com/macros/s/AKfycbx6r0WJTV-WFr8aWKWxvPz8WpXsxTcLWk1jwvZQW4axBgxPVSByDgbnBD30E6bs9IS0/exec",
    {
        method:"POST",

        body:JSON.stringify({
            date:days.join(", "),
            time:times.join(", ")
        })
    });

    document.getElementById("gift").style.display="none";

    document.getElementById("success").classList.remove("hidden");

}

function openGift(){

    document.querySelector(".hero").style.display = "none";

    document.getElementById("gift").classList.remove("hidden");

    document.getElementById("music").play();

}