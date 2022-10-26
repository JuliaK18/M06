// preparem
const botonet2 = document.querySelectorAll('.btn-crazy');

//dwfinim la funció
function Moviment() {
// obteniu un nombre aleatori per al desplaçament esquerre 
// nombre aleatori per al desplaçament superior
  const desplaçamentEsquerra = Math.random() * (window.innerWidth - this.clientWidth);
  const desplaçamentDalt  = Math.random() * (window.innerHeight - this.clientHeight);

  console.log(desplaçamentEsquerra, desplaçamentDalt);

  // apply those numbers to the button
  this.style.top = desplaçamentDalt + 'px';
  this.style.left = desplaçamentEsquerra + 'px';
}

// posem event listeners
botonet2.forEach(button => button.addEventListener('mouseenter', goCrazy));