const nomes = ['joão', 'claudio', 'marcios']
const input = 'o'
const selecionado = nomes.filter((nome)=>{
  if (nome.indexOf(input) != -1) {
    return nome
  }
})

console.log(nomes)
console.log(selecionado)



---
function searchMarkerItem() {
  let value = input.value;
  const listActiveOld = document.querySelectorAll('li.active');

  listActiveOld.forEach((item) => {
    item.classList.remove('active');
  });

  const listActiveCurrent = list.filter((item) =>{

  })

  list.forEach((item) => {
    const selected = searchListItem(value);
  })
}

const input = document.querySelector('#search');
const list = document.querySelectorAll('.ol > li');
input.addEventListener('keyup', searchMarkerItem);