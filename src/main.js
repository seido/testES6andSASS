import Person from './person';
//import jQuery from '../node_modules/jquery/dist/jquery.min.js'
//window.$ = window.jQuery = jQuery;
//require('../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js');
import  '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

class Friend extends Person {
  constructor(name) {
    super(name);
  }
  callName() {
    alert(this.name);
  }
}

var friend = new Friend('RyoX');

friend.callName();
