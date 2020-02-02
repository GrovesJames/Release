import Home from './components/home.js'
import Write from './components/write.js'
import Done from './components/done.js'


export default () => {
  pageBuild()
};
  
function pageBuild() {
  home()
  writeNAV()
  submitNAV()
  againNAV()
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
function submit(){
  document.getElementById('last').style.visibility = "visible";
  document.getElementById('last').style.marginTop = "-2%";
}
function hidesubmit(){
  document.getElementById('last').style.visibility = "hidden";
}
function again(){
  document.getElementById('again').style.visibility = "visible";
  document.getElementById('again').style.marginTop = "2%";
}
function hideagain(){
  document.getElementById('again').style.visibility = "hidden";
}

function writeNAV() {
  const navWrite = document.querySelector('#beginbutton');
  navWrite.addEventListener('click', function() {
      submit()
      write()
  });
}
function submitNAV(){
  const navSubmit = document.querySelector('#last');
  navSubmit.addEventListener('click', function() {
    hidesubmit()
    done()
    again()
  });
}
function againNAV() {
  const navAgain = document.querySelector('#again');
  navAgain.addEventListener('click', function() {
      submit()
      write()
      hideagain()
  });
}

