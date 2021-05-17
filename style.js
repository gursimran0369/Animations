
anime({
    targets: 'div',
    translateY: [
    {value:200, duration:5000},
    {value:0, duration:5000}
    ],
  });

//   var logEl = document.querySelector('.battery-log');

// var battery = {
//   charged: '0%',
//   cycles: 120
// }

// anime({
//   targets: battery,
//   charged: '100%',
//   cycles: 130,
//   round: 1,
//   easing: 'linear',
//   update: function() {
//     logEl.innerHTML = JSON.stringify(battery);
//   }
// });

// anime({
//   targets: ['.svg-attributes-demo polygon', 'feTurbulence', 'feDisplacementMap'],
//   points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
//   baseFrequency: 0,
//   scale: 1,
//   loop: true,
//   direction: 'alternate',
//   easing: 'easeInOutExpo'
// });