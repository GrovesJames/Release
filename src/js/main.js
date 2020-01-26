import Home from './Components/home'

export default () => {
  pageBuild()
};
  
  function pageBuild() {
    home()
  }
  
  const app = document.getElementById('app');

  function home(){
    app.innerHTML = Home();
  }