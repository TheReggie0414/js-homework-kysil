const clickDiv = document.getElementById("clickDiv");

clickDiv.addEventListener("click", function (event) {
  const point = document.createElement("div");

  point.className = "dot";
  point.style.position = "absolute";
  point.style.width = "10px";
  point.style.height = "10px";
  point.style.borderRadius = "50%";
  point.style.backgroundColor = "green";

  point.style.left = (event.clientX - clickDiv.getBoundingClientRect().left - 5) + "px";
  point.style.top = (event.clientY - clickDiv.getBoundingClientRect().top - 5) + "px";

  clickDiv.appendChild(point);
});