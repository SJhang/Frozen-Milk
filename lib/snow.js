// /* eslint no-undef: "off", max-len: "off" */
//
// export default class Snow {
// 	constructor(canvas, stage) {
// 		const innerWidth = window.innerWidth;
// 		const innerHeight = window.innerHeight;
// 		canvas.length = innerWidth;
// 		canvas.height = innerHeight;
//
// 		const twoPi = Math.PI * 2;
// 		let angle = 0;
// 		snowParticle();
// 		setInterval(draw(), 33);
// 	}
//
// 	snowParticle() {
// 		const maxNumOfParticles = 25;
// 		const particles = [];
//
// 		for (let i = 0; i < maxNumOfParticles; i++) {
// 			particles.push({
// 				x: Math.random() * innerWidth,
// 				y: Math.random() * innerHeight,
// 				radius: Math.random() * 4+1,
// 				density: Math.random() * maxNumOfParticles
// 			});
// 		}
// 	}
//
// 	draw() {
// 		debugger;
// 		const rect = new createjs.Rectangle(0, 0, innerWidth, innerHeight);
//
// 		rect.fillStyle = "rgba(255, 255, 255, 0.8)";
// 		rect.beginPath();
// 		for (var i = 0; i < maxNumOfParticles; i++) {
// 			const particle = particles[i];
// 			canvas.moveTo(particle.x, particle.y);
// 			canvas.arc(particle.x, particle.y, particle.radius, 0, twoPi, true);
// 		}
// 		canvas.fill();
// 		update();
// 		stage.update();
// 	}
//
// 	update() {
// 		angle += 0.02;
// 		for (var i = 0; i < maxNumOfParticles; i++) {
// 			let particle = particles[i];
// 			particle.y += Math.cos(angle + particle.density) + 1 + particle.radius/2;
// 			particle.x += Math.sin(angle) * 2;
//
// 			if (particle.x > innerWidth+5 || particle.x < -5 || particle.y > innerHeight) {
// 				if (i % 3 > 0) {
// 					particles[i] = {
// 						x: Math.random() * innerWidth,
// 						y: -10,
// 						radius: particle.radius,
// 						density: particle.density
// 					};
// 				} else {
// 					if (Math.sin(angle) > 0) {
// 						particles[i] = {
// 							x: -5,
// 							y: Math.random() * innerHeight,
// 							radius: particle.radius,
// 							density: particle.density
// 						};
// 					} else {
// 						particle = {
// 							x: innherWidth * 5,
// 							y: Math.random() * innerHeight,
// 							radius: particle.radius,
// 							density: particle.density
// 						};
// 					}
// 				}
// 			}
// 		}
// 	}
// }
