var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
var darkModetoggleIsOn = false;

  function turnOnDarkModeColors() {
    if (darkModetoggleIsOn === true) {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', '#1d1d1d');
        document.documentElement.style.setProperty('--light-theme-background', '#121212');
        document.documentElement.style.setProperty('--light-theme-primary', '#BB86FC');
        document.documentElement.style.setProperty('--light-theme-primary-dark', '#3700B3');
        document.documentElement.style.setProperty('--light-theme-secondary', '#03DAC6');
        document.documentElement.style.setProperty('--light-theme-secondary-dark', '#CF6679');
        document.body.style.color = '#121212';
    } else {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', '#bdbdbd');
        document.documentElement.style.setProperty('--light-theme-background', '#FFFFFF');
        document.documentElement.style.setProperty('--light-theme-primary', 'rgba(18, 18, 18, .3)');
        document.documentElement.style.setProperty('--light-theme-primary-dark', '#6200EE');
        document.documentElement.style.setProperty('--light-theme-secondary', '#03DAC6');
        document.documentElement.style.setProperty('--light-theme-secondary-dark', '#018786');
        document.body.style.color = 'black';
    }
}

  // DARK MODE TOGGLE FUNCTIONALITY
darkModeSwitch.addEventListener('click', function() {
  if (darkModetoggleIsOn === false) {
      darkModeSwitch.style.justifyContent = 'flex-end';
      darkModetoggleIsOn = true;
  } else {
      darkModeSwitch.style.justifyContent = 'flex-start';
      darkModetoggleIsOn = false;
  }
  turnOnDarkModeColors();
  return darkModetoggleIsOn;
});

module.exports = darkModeSwitch