export function separate(element){
    
  let originalString = (element.innerText);
  let fragment = new DocumentFragment();

  for( let i = 0; i < originalString.length; i++){
    let span = document.createElement('span');
    span.innerText = originalString[i];
    span.style.animationDelay = `${0.3 + (i * 0.03)}s`
    if (span.innerText == " ") span.style.display = "initial";
    fragment.append(span);
  }
  
  element.innerText = null;
  element.append(fragment);
}
