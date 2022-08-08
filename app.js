import * as THREE from './node_modules/three/build/three.module.js'

let scene;
let renderer; 
let camera;
let cube;
let height = window.innerHeight;
let width = window.innerWidth;
let clock;


function init(){
    scene = new THREE.Scene();
    clock = new THREE.Clock();
    
    const canvasHtml = document.getElementById('mycanvas');

    renderer = new THREE.WebGLRenderer({antialias : true, canvas : canvasHtml, alpha : true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x16a085, 1)
   

    camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000 );
    camera.position.set(-500, 500, -500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.add(camera);


    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    scene.add(directionalLight);
    //cube
    const cubeGeo = new THREE.BoxGeometry(300, 300, 300);
    const cubeMat = new THREE.MeshPhongMaterial({color : 0x34495e});

    cube = new THREE.Mesh(cubeGeo, cubeMat);
    scene.add(cube);

    render();
};

function render(){

    const delta = clock.getDelta();
    
    cube.rotation.y += 0.6 * delta 
    cube.rotation.x += 0.3 * delta

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();