//threejs - demo - https://threejs.org/examples/webgl_particles_random.html
var container = document.createElement('div');
document.body.appendChild( container );

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,1, 3000)
camera.position.z = 1000; //pull this back to 2000 to see what is actually going on

var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0x0000F0, 0.0009 );  //color of fog - objects are all white
var geometry = new THREE.Geometry();

for (i = 0; i < 20000; i ++) //total objects within each particle object
{ //-1000 is for centering on screen, span would be -1000 to 1000
  var vertex = new THREE.Vector3();
  vertex.x = Math.random()*2000-1000;
  vertex.y = Math.random()*2000-1000;
  vertex.z = Math.random()*2000-1000;
  geometry.vertices.push( vertex );
}


//repeating similar code for each "Particle object" I want --- can add for loop
var material = new THREE.ParticleBasicMaterial( { size: 4 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 


 material = new THREE.ParticleBasicMaterial( { size: 3 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 


 material = new THREE.ParticleBasicMaterial( { size: 5 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 

 material = new THREE.ParticleBasicMaterial( { size: 5 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 
 material = new THREE.ParticleBasicMaterial( { size: 5 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 
 material = new THREE.ParticleBasicMaterial( { size: 5 });


var particles = new THREE.ParticleSystem( geometry, material );
	        particles.rotation.x = Math.random() * 6;
				  particles.rotation.y = Math.random() * 6;
					particles.rotation.z = Math.random() * 6;
scene.add( particles ); 
////////////////////////////////////////////////////////////////


var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild( renderer.domElement );

renderer.render( scene, camera );

render();

			function render() {
        requestAnimationFrame( render );
        

				for ( i = 0; i < scene.children.length; i ++ ) {

					var object = scene.children[ i ];

					if ( object instanceof THREE.ParticleSystem ) {

						object.rotation.y += .0035;

					}

				}

				renderer.render( scene, camera );

			}


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}