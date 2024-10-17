const showLabel = (label:HTMLLabelElement | null, content:string, color: string) => {
  if (label) {
    label.innerText = content
    label.style.color = color
    label.style.display = "block"
  }
}

export default showLabel
