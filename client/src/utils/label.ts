const showLabel = (label:HTMLLabelElement, content:string, color: string) => {
  label.innerText = content
  label.style.color = color
  label.style.display = "block"
}

export default showLabel
