
// Cards
const cardsContainer = document.getElementById('cards');

let pastEvents = []

  function filtrarArrayFecha(array){
      for(let i = 0; i < array.length; i++){
          if(array[i].date > currentDate){
              pastEvents.push(array[i])
          }
      }   
  }

filtrarArrayFecha(events)

function insertCards(arrayEvents){
	if(arrayEvents.length === 0){
		  console.log("narnia")
		  cardsContainer.innerHTML = `
		              <div class="d-flex align-items-center justify-content-center vh-50" style="margin:  0 auto;">
            <div class="text-center">
                <h1 class="display-1 fw-bold">Not Found</h1>
                <p class="fs-3"> <span class="text-danger">Ups!</span> terms not found.</p>
                <a href="index.html" class="btn btn-primary">Go Home</a>
            </div>
        </div>

		  `
        return 

    }
	let data_filter = arrayEvents.filter(element => element.date < currentDate);
	let card = '';
	   data_filter.forEach(e => {
		 card += `<li class="cards_item">
						<div class="card">
							<div class="card_image">
          <img src="${e.image}" alt="${e.name}" />
          <span class="card_price btn btn-light img-shadow btn-light-custom custom-past">Event ended on: ${e.date}</span>
        </div>
        <div class="card_content">
          <h2 class="card_title">${e.name}</h2>
          <div class="card_text">
            <p>${e.description}
            </p>
            
			<p>
								<a href="detailEvent.html?id=${e.id}" class="btn btn-light img-shadow btn-light-custom">See more</a>
			</p> 
          </div>
        </div>
      </div>
    </li>
			`
	   });
			cardsContainer.innerHTML = card;
}
insertCards(events);


//filtros
//search
const input = document.querySelector('input');

function filterSearch(arrayEvents, inputText){
    let arrayFiltered = arrayEvents.filter(e => e.name.toLowerCase().includes(inputText.toLowerCase()));
    return arrayFiltered;
}

const containerCheckbox = document.getElementById('containerCheckbox');

function crearCheckboxes(arrayEvents){
    let checks = ''
    let categoriasRepe = arrayEvents.map(elemento => elemento.category)
    let categorias = new Set(categoriasRepe.sort((a,b)=>{
        if(a>b){
            return 1
        }
        if(a<b){
            return -1
        }
        return 0
    }))
    categorias.forEach(elemento =>{
        checks += `<div class="form-check form-check-inline">
        <input class="form-check-input form-check-inline border-custom" type="checkbox" id="${elemento}" value="${elemento}">
        <label class="form-check-label" for="${elemento}">${elemento}</label>
      </div>`
    })
    containerCheckbox.innerHTML = checks
}


crearCheckboxes(events);

function filtrarPorCategoria(arrayEvents){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    let arrayChecks = Array.from(checkboxes)
    let checksChecked = arrayChecks.filter(check => check.checked)
    if(checksChecked.length == 0){
        return arrayEvents
    }
    let checkValues = checksChecked.map(check => check.value)
    let arrayFiltrado = arrayEvents.filter(elemento => checkValues.includes(elemento.category))
    return arrayFiltrado
}

input.addEventListener('input',()=>{
    let f1 = filterSearch(events, input.value);
    let f2 = filtrarPorCategoria(f1);
    insertCards(f2);
})

containerCheckbox.addEventListener('change',()=>{
    let f1 = filterSearch(events, input.value);
    let f2 = filtrarPorCategoria(f1);
    insertCards(f2);
}) 
