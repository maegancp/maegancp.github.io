// $('#bulletinhouse').hover(
//     function(){ $(this).addClass('animate__animated') },
//     function(){ $(this).addClass('animate__pulse') },
// )

element1 = document.getElementById("bulletinhouse");
element1.addEventListener('mouseover', () => {
    // do something
    element1.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    element1.style.cursor = "pointer";
    document.getElementById('bulletinhousehover').style.opacity = 1;
  });
  element1.addEventListener('mouseout', () => {
    // do something
    element1.classList.remove('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    document.getElementById('bulletinhousehover').style.opacity = 0;
  })


element2 = document.getElementById("calendarhouse");
element2.addEventListener('mouseover', () => {
    // do something
    element2.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    element2.style.cursor = "pointer";
    document.getElementById('calendarhousehover').style.opacity = 1;
  });
  element2.addEventListener('mouseout', () => {
    // do something
    element2.classList.remove('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    document.getElementById('calendarhousehover').style.opacity = 0;
  })


element3 = document.getElementById("profilehouse");
element3.addEventListener('mouseover', () => {
    // do something
    element3.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    element3.style.cursor = "pointer";
    document.getElementById('profilehousehover').style.opacity = 1;
  });
  element3.addEventListener('mouseout', () => {
    // do something
    element3.classList.remove('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    document.getElementById('profilehousehover').style.opacity = 0;
  })


element4 = document.getElementById("infohubhouse");
element4.addEventListener('mouseover', () => {
    // do something
    element4.classList.add('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    element4.style.cursor = "pointer";
    document.getElementById('infohubhousehover').style.opacity = 1;
  });
element4.addEventListener('mouseout', () => {
    // do something
    element4.classList.remove('animate__animated', 'animate__pulse', 'animate__repeat-3', 'animate__fast');
    document.getElementById('infohubhousehover').style.opacity = 0;
  })