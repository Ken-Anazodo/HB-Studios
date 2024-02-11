const fn = () => {
    let queryString = window.location.search;
    let params = new URLSearchParams(queryString);
    let id = params.get('id');
	
    console.log(id);


	let dataBase = JSON.parse(localStorage.getItem('database'))
	
	
}

fn();
