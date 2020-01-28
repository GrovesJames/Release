import Home from './Components/home'
import Write from './Components/write'

export default () => {
  pageBuild()
};
  
  function pageBuild() {
    home()
    writeNAV()
  }
  
  const app = document.getElementById('app');

  function home(){
    app.innerHTML = Home();
  }
  function write(){
    app.innerHTML = Write();
}
function writeNAV() {
  const navWrite = document.querySelector('#beginbutton');
  navWrite.addEventListener('click', function() {
      write()
  });
}