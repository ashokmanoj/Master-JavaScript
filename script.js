let para = document.getElementById("paragraph");
para.style.color = "green";
para.style.fontSize = "20px";
para.style.textAlign = "center";

let heading = document.addEventListener("click", () => {
    let heading1 = document.querySelector(".heading");
    heading1.style.color = "red";
    alert("Heading color changed to red");
});

