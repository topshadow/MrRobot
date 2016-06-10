import 'whatwg-fetch';
import {fetch} from"fetch";
fetch('default.js')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
  document.body.innerHTML = body
})
