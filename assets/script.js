const input = document.querySelector('input')
const lista = document.querySelector('ul')

input.addEventListener('keyup',adicionar)

function adicionar(event){
    if(event.key === 'Enter'){
               
        if(!input.value){
            alert('Digite Algo')
            return
        }
        
        const novoItem = document.createElement('li')
        novoItem.innerHTML = input.value

        lista.appendChild(novoItem)

        input.value = ''
    }
}