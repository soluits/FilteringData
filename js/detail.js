const ID = new URLSearchParams(window.location.search).get('id');


function eventData() {
    var html = "";
	let data_filter = events.filter(element => element._id == ID);
    for (var i = 0; i < data_filter.length; i++) {
        html += `<div class="row">
        <div class="col-lg-8 center">
            <!-- contenido -->
            <article>
                <div class="mb-4">
                    <h2 class="fw-bolder mb-1">${data_filter[i].name}</h2>
                    <!--                     <div class="text-muted fst-italic mb-2">hola2</div> -->
					    <div class="text-center bg-row-cb">
        <p class="d-inline badge bg-secondary text-decoration-none link-light">Category ${data_filter[i].category}</p>
                    <p class="d-inline badge bg-secondary text-decoration-none link-light">Place ${data_filter[i].place}</p>
                    <p class="d-inline badge bg-secondary text-decoration-none link-light">Price ${data_filter[i].price}</p>
                    <p class="d-inline badge bg-secondary text-decoration-none link-light">Capacity ${data_filter[i].capacity}</p>
                    ${data_filter[i].estimate ? '  <p class="d-inline badge bg-secondary text-decoration-none link-light"> Estimated Public '+data_filter[i].estimate+'</p>': ""}
					${data_filter[i].assistance ? '  <p class="d-inline badge bg-secondary text-decoration-none link-light"> Assistance ' +data_filter[i].assistance +'</p>  ': ""}
						</div>

                    <!-- categories -->
                    
                </div>
                </div>
                <figure class="mb-4" >
                    <img class="img-fluid rounded" src="${data_filter[i].image}" alt="${data_filter[i].name}">
                </figure>
                <section class="mb-5">
                    <p class="text">${data_filter[i].description}</p>
                </section>
               
            </article>
        </div>
    </div>`;
    }

    document.getElementById("event-container").innerHTML = html;
}

eventData();

