$(function() {
	let grid = [25,25];
	let col = grid[1];
	let row= grid[0];
	let total = col*row;
	for (var i = 0; i < total; i++) {
		$('.container').append(`<div class="cell"></div>`);
	};

let stageAnime = anime
.timeline({
targets: '.cell',
 easing: 'easeInBack',
 delay: anime.stagger(200, {from:'last'}),
  duration: 2000,
  endDelay: 1000,
  loop: true
})
.add({
	 translateX: ()=> anime.random(-300,300),
	  translateY: ()=> anime.random(-300,300),
	  delay: anime.stagger(200, {grid: grid,from:'last'}),
	  scale: 0.5,
	  background:'#15ffa5',
	  borderRadius:'50%',
})
.add({
	targets: '.container',
	rotate: 360,
	duration:2000,
	easing : "easeOutBounce" 
})
.add({
	translateX: 0,
	translateY: 0,
	delay: anime.stagger(100, {grid: grid,from:'center'}),
	  background:'#b15dff',
})
.add({
	 translateX:[
	{
    value: anime.stagger('-0.1rem', {grid: grid, from: 'first', axis: 'x'}),
  	},
  	{
    value: anime.stagger('0.1rem', {grid: grid, from: 'first', axis: 'x'}),
  	},
  	{
    value: anime.stagger(0, {grid: grid, from: 'first', axis: 'x'}),
  	},
	],
	translateY:[
	{
    value: anime.stagger('0.1rem', {grid: grid, from: 'last', axis: 'y'}),
  	},
  	{
    value: anime.stagger('-0.1rem', {grid: grid, from: 'last', axis: 'y'}),
  	},
  	{
    value: anime.stagger(0, {grid: grid, from: 'last', axis: 'y'}),
  	},
	],
	delay:anime.stagger(100, {grid: grid,from:'last'}),
	scale: 0.7,
	 background:'#15ffa5',
	 borderRadius : 0
})
.add({
	 translateX:[
	{
    value: anime.stagger('-5px', {grid: grid, from: 'center', axis: 'x'}),
  	},
  	{
    value: anime.stagger('5px', {grid: grid, from: 'center', axis: 'x'}),
  	},
  	{
    value: anime.stagger(0, {grid: grid, from: 'center', axis: 'x'}),
  	},
	],
	translateY:[
	{
    value: anime.stagger('-5px', {grid: grid, from: 'center', axis: 'y'}),
  	},
  	{
    value: anime.stagger('5px', {grid: grid, from: 'center', axis: 'y'}),
  	},
  	{
    value: anime.stagger(0, {grid: grid, from: 'center', axis: 'y'}),
  	},
	],
	delay:anime.stagger(100, {grid: grid,from:'center'}),
	scale: 1,
	 background:'#5A87FF',
	 borderRadius : 0
})
stageAnime.play();

//hieu ung chu
	let path = anime.path("svg path");
let textAnime = anime.timeline({
	targets: 'svg path',
	  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 5000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true,
  opacity: 1
}).add({
	targets: '.square',
	 translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  easing: 'linear',
  duration: 5000,
  loop: true
})
textAnime.play();
});