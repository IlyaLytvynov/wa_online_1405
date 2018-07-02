(function () {
  const list = new App.List({
    containerSelector: '.list-container'
  });
  const lighters =  [
    new TrafficLighter('.traffic-lighter-wrapper'),
    new TrafficLighter('.traffic-lighter-wrapper-2'),
    new TrafficLighter('.traffic-lighter-wrapper-3')
  ];
  const controller = new LighterController('.controller-container', lighters);
})();




