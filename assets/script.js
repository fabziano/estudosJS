const input = document.querySelector('input')
const lista = document.querySelector('ol')

input.addEventListener('keypress',(event)=>event.key === 'Enter' && adicionar())

function adicionar(){   
        const textoInput = input.value.trim()
        if(!textoInput){
            alert('Digite Algo')
            return
        }   
        const novoItem = document.createElement('li')
        novoItem.textContent = textoInput

        const excluirBtn = document.createElement('button')
        excluirBtn.textContent = 'Excluir'

        excluirBtn.addEventListener('click',()=>excluir(novoItem))

        lista.appendChild(novoItem)
        novoItem.appendChild(excluirBtn)
        input.value = ''
}

function excluir(item){
    lista.removeChild(item)
}