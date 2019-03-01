import * as _ from "lodash";
import './style.scss';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', '<span class="hello-world">webpack</span>'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
