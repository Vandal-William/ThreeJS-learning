import * as THREE from './node_modules/three/build/three.module.js'

let scene;
let renderer; 
let camera;
let cube;
let cubered;


function init(){
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({antialias : true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set(-500, 400, -500);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.add(camera);

    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    scene.add(directionalLight);

    const cubeGeo = new THREE.BoxGeometry(300, 300, 300);
    const cubeMat = new THREE.MeshPhongMaterial({color : 0x34495e});
    cube = new THREE.Mesh(cubeGeo, cubeMat);
    
        scene.add(cube);
        

    render();
};

function render(){

    cube.rotation.y += 0.01
    cube.rotation.x += 0.01

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();