import Home from './Components/home'
import Write from './Components/write'
import Done from './Components/done'


export default () => {
  pageBuild()
};
  
function pageBuild() {
  home()
  writeNAV()
  doneNAV()
}
  
const app = document.getElementById('app');

function home(){
  app.innerHTML = Home();
}
function write(){
  app.innerHTML = Write();
}
function done(){
  app.innerHTML = Done();
}

function writeNAV() {
  const navWrite = document.querySelector('#beginbutton');
  navWrite.addEventListener('click', function() {
      write()
  });
}
function doneNAV() {
  const navDone = document.querySelector('#submitbutton');
  navDone.addEventListener('click', function() {
      done()
  });
}