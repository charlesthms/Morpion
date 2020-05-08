const cellules = document.querySelectorAll('[data-cell]')
const winMess = document.querySelector('[win-message]')
const winID = document.getElementById('win-mess')
const rejoueur = document.getElementById('rejoueur')

const x_Class = 'X'
const o_class = 'O'


const win = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

var alternate = false
var plateau = new Map()



cellules.forEach(cell => {
  cell.addEventListener('click', onClick, { once: true })
})



function onClick(e) {

	const currentCell = e.target
	const currentClass = alternate ? o_class : x_Class

	var currentID = currentCell.id
	var x = plateau.set(currentID, currentClass)

	applyStyle(currentID, currentClass)
	isWin(plateau)
	tourSwap()
}


function applyStyle(id, CurrentClass) {

	cell = document.getElementById(id)
	cell.style.fontSize = '110px'
	cell.style.fontFamily = "Quicksand, sans-serif"
	cell.innerHTML = CurrentClass
}


function tourSwap() {
	alternate = !alternate
}


function checkLine(plateau, line) {
	// Verifie si une ligne est composée des 3 mêmes valeurs.

	var a = plateau.get(line[0].toString())
	var b = plateau.get(line[1].toString())
	var c = plateau.get(line[2].toString())

	if ( a===b && a===c ){
		return a
	}
	return false
}

function isWin(plateau) {
	// Itere sur le tableau win et applique checkLine() sur chaque ligne.

	win.forEach( line => {
	  check = checkLine(plateau, line)

	  if ( check === 'X' || check === 'O' ){
	  	winMess.innerText = `${alternate ? 'O à gagné !' : 'X à gagné !'}`
	  	winID.classList.add('show')
	  } else if (plateau.size === 9){
	  	winMess.innerText = `Match null !`
	  	winID.classList.add('show')
	  }
	  return false

	})
}





