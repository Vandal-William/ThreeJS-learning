import * as THREE from './node_modules/three/build/three.module.js'
import { OrbitControls} from './OrbitControls.js'

let scene;
let renderer;
let camera;
let cube;
let height = window.innerHeight;
let width = window.innerWidth;
let clock;
let directionalLight;



function init() {
    scene = new THREE.Scene();
    clock = new THREE.Clock();

    const canvasHtml = document.getElementById('mycanvas');

    renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasHtml, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x16a085, 1)


    camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
    camera.position.set(-10, 5, -1);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);


    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
    scene.add(ambientLight);

    // creation d'un plane avec sa texture    
    const loader = new THREE.TextureLoader();
    const planeSize = 2;
    const texture = loader.load('./assets/textures/Grass_Sample.png');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({map: texture, side: THREE.DoubleSide});

    //j'ajoute le plane a la scene
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -0.5;
    scene.add(mesh)

    // j'ajoute la texture du sprite
    const narutoTexture = loader.load('./assets/textures/spriteNaruto.webp');
    const narutoMaterial = new THREE.SpriteMaterial({
        map: narutoTexture
    });

    // j'ajoute le sprite a la scène 
    const narutoSprite = new THREE.Sprite(narutoMaterial)
    narutoSprite.position.set(0, 0.5, 0);
    scene.add(narutoSprite)

    directionalLight = new THREE.DirectionalLight(0xcccccc, 0.8);
    scene.add(directionalLight);
    
    //const cubeMatPhong = new THREE.MeshPhongMaterial({color : 0xcccccc});
        //const cubeGeo = new THREE.BoxGeometry(300, 300, 300);
        //cube = new THREE.Mesh(cubeGeo, cubeMatPhong);
        //scene.add(cube);

    
    render();
};

function render() {

    const delta = clock.getDelta();

    //cube.rotation.y += 0.6 * delta 
    //cube.rotation.x += 0.3 * delta

    renderer.render(scene, camera);
    requestAnimationFrame(render);
}

init();
const controls = new OrbitControls(camera, renderer.domElement);