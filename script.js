const controls = document.getElementById("controls");
console.log(controls);
const btn = document.getElementById("btn");
const description = document.getElementById("description");

const appendStyle = {
  text: document.getElementById("text"),
  color: document.getElementById("color"),
  background: document.getElementById("backgroundColor"),
  height: document.getElementById("height"),
  width: document.getElementById("width"),
  borderRadius: document.getElementById("borderRadius"),
  fontFamily: document.getElementById("fontFamily"),
  fontSize: document.getElementById("fontSize"),
};

for(element in appendStyle){
  let doc = document.createElement('span');
  doc.innerText = `${element}: ${appendStyle[element].value}`
  description.appendChild(doc);
}

controls.addEventListener("change", () => {
  for (element in appendStyle) {
    if (
      element === "height" ||
      element === "width" ||
      element === "fontSize" ||
      element === "borderRadius"
    ) {
      if (element === "fontSize") {
        btn.style.setProperty("font-size", appendStyle[element].value + "px");
      }
      if (element === "borderRadius") {
        btn.style.setProperty(
          "border-radius",
          appendStyle[element].value + "px"
        );
      }
      btn.style.setProperty(element, appendStyle[element].value + "px");
    } else {
      if (element === "text") {
        btn.innerText = appendStyle[element].value;
      }
      if (element === "fontFamily") {
        btn.style.setProperty("font-family", appendStyle[element].value);
      }
      btn.style.setProperty(element, appendStyle[element].value);
    }
  }
});

