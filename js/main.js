document.addEventListener('DOMContentLoaded', function() {
  const sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);
  AOS.init({
    duration: 550,
    once: true,
    easing: 'ease-out'
  });

  const counter = document.querySelector('.counter');
  counter.addEventListener('aos:in', ({ detail }) => {
    console.log('animated in', detail);
  });
  
  counter.addEventListener('aos:out', ({ detail }) => {
    console.log('animated out', detail);
  });
  

  const expandables = document.querySelector('.collapsible.expandable');
  M.Collapsible.init(expandables, {
    accordion: false,
    inDuration: 0,
    outDuration: 0
  });

  const projectControls = document.querySelectorAll('.projects-control');
  const projectContainer = document.querySelector('.portfolio-projects');
  const shuffleInstance = new Shuffle(projectContainer, {
    itemSelector: '.project',
    sizer: '.sizer'
  });

  projectControls[0].classList.add('filter-active');

  for (let control of projectControls) {
    control.addEventListener('click', e => {
      // shuffle by control.getAttribute('data-filter')
      const filter = control.getAttribute('data-filter');
      if (filter !== "*"){
        shuffleInstance.filter(filter);
      } else {
        shuffleInstance.filter(Shuffle.ALL_ITEMS);
      }
      for (let b of projectControls) {
        if (b.classList.contains('filter-active')) {
          b.classList.remove('filter-active');
        }
      }
      control.classList.add('filter-active');
      console.log(shuffleInstance);
    });
  }
});