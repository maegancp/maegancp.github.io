// $('#bulletinhouse').hover(
//     function(){ $(this).addClass('animate__animated') },
//     function(){ $(this).addClass('animate__pulse') },
// )

element = document.getElementById("bulletinhouse");
element.addEventListener('mouseover', () => {
    // do something
    element.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
  });
element.addEventListener('mouseout', () => {
    // do something
    element.classList.remove('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
  })