import Home from './Components/home'
import Write from './Components/write'
import Done from './Components/done'


export default () => {
  pageBuild()
};
  
function pageBuild() {
  home()
  writeNAV()
  submitNAV()
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
function submitNAV(){
  const navSubmit = document.querySelector('#last');
  navSubmit.addEventListener('click', function() {
    done()
  });
}

