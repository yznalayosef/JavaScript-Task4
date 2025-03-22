document.addEventListener('DOMContentLoaded', function() {
  
  const textElement = document.getElementById('text');
  const changeBtn = document.getElementById('changeBtn');
  const resetBtn = document.getElementById('resetBtn');

  
  const originalStyle = {
    color: textElement.style.color,
    fontSize: textElement.style.fontSize
  };

  
  changeBtn.addEventListener('click', function() {
    textElement.style.color = 'blue';   // Change text color to blue
    textElement.style.fontSize = '24px';  // Change font size to 24px
  });

  
  resetBtn.addEventListener('click', function() {
    textElement.style.color = originalStyle.color;
    textElement.style.fontSize = originalStyle.fontSize;
  });
});
