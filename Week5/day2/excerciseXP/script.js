function getRequest(){
let objxhr = new XMLHttpRequest();
objxhr.open('GET', `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
objxhr.responseType = 'json'; 
objxhr.send();
objxhr.onload = function() {
if (objxhr.status != 200) {
  
	  console.log('error');
} else {
console.log(objxhr.response.data);
	}
  };
}






function getRequ(){
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=sun&offset=2&limit=11`);
xhr.responseType = 'json'; 
xhr.send();
xhr.onload = function() {
if (xhr.status != 200) {
  
	  console.log('error');
} else {
console.log(xhr.response.data);
	}
  };
}