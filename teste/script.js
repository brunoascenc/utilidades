var elementos = document.querySelectorAll(".shelf__product");

for (var el of elementos) {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    var divElement = document.createElement("DIV");
    divElement.id = "divID";
    divElement.style.textAlign = "center";
    divElement.style.fontSize = "smaller";
    divElement.style.paddingTop = "15px";
    divElement.style.position = "fixed";
    divElement.style.bottom = "0";
    divElement.style.width = "100%";
    divElement.style.height = "150px";
    divElement.style.backgroundColor = "white";
    var paragraph = document.createElement("P");
    var text = document.createTextNode(
      "Test"
    );
    paragraph.appendChild(text);
    divElement.appendChild(paragraph);
    document.getElementsByTagName("header")[0].appendChild(divElement);
  });
}
