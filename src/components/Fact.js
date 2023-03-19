const facts = [
  "Mercury & Venus are the only 2 planets in our solar system that have no moons.",
  "If a star passes too close to a black hole, it can be torn apart.",
  "The hottest planet in our solar system is Venus.",
  "Our solar system is 4.57 billion years old.",
  "Enceladus, one of Saturn’s smaller moons, reflects 90% of the Sun’s light.",
  "The highest mountain discovered is the Olympus Mons, which is located on Mars.",
  "The Whirlpool Galaxy (M51) was the first celestial object identified as being spiral.",
  "A light-year is the distance covered by light in a single year.",
  "The Milky Way galaxy is 105,700 light-years wide.",
  "The Sun weighs about 330,000 times more than Earth.",
  "Footprints left on the Moon won’t disappear as there is no wind.",
  "Because of lower gravity, a person who weighs 220 lbs on Earth would weigh 84 lbs on Mars.",
  "The Martian day is 24 hours 39 minutes and 35 seconds long.",
  "NASA’s Crater Observation and Sensing Satellite (LCROSS) found evidence of water on the Earth’s Moon.",
  "The Sun makes a full rotation once every 25 – 35 days.",
  "Earth is the only planet not named after a God.",
  "Due to the Sun and Moon’s gravitational pull, we have tides.",
  "Pluto is smaller than the United States.",
  "According to mathematics, white holes are possible, although as of yet we have found none.",
  "Uranus’ blue glow is due to the gases in its atmosphere.",
  "In our solar system that are 4 planets known as gas giants: Jupiter, Saturn, Uranus & Neptune.",
  "Uranus has 27 moons that have been discovered so far.",
  "Because of its unique tilt, a season on Uranus is equivalent to 21 Earth years.",
  "Neptune’s moon, Triton, orbits the planet backwards.",
  "There are more stars in space than there are grains of sand in the world.",
  "Neptune takes nearly 165 Earth years to make one orbit of the Sun.",
];

const RandomFact = () => {
  let newFact = facts[Math.floor(Math.random() * facts.length)];
  console.log(newFact);
  document.getElementById("here").innerHTML = newFact;
};

export default RandomFact;
