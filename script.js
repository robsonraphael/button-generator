const controls = document.getElementById('controls');
const button = document.getElementById('btn');
const cssText = document.getElementById('description');
const description = document.getElementById('description');

controls.addEventListener("change", fastChange)
button.addEventListener("click", () => { alert('Toc Toc ...') })

const handleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + 'px';
  },
  width(value) {
    this.element.style.width = value + 'px';
  },
  texto(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + 'px';
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + 'px';
  },
}

function fastChange(e) {
  const name = e.target.name
  const value = e.target.value

  handleStyle[name](value)
  saveValues(name, value)
  showCss();
}

// Local storage
const saveValues = (name, value) => {
  localStorage[name] = value;
}

// setar valor
const setValues = () => {
  const properties = Object.keys(localStorage);
  properties.forEach(props => {
    handleStyle[props](localStorage[props])
    controls.elements[props].value = localStorage[props]
  });
  showCss();
}

const showCss = () => {
  cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span> <span>')
}
