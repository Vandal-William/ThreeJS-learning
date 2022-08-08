# SCALE, CLONE ET ENFANT

```js
import * as THREE from "./node_modules/three/build/three.module.js";
let scene;
let renderer;
let camera;
let cube;
let cubered;

function init() {
  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.set(-500, 400, -500);
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  camera.add(camera);

  const ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  scene.add(directionalLight);

  const cubeGeo = new THREE.BoxGeometry(300, 300, 300);
  const cubeMat = new THREE.MeshPhongMaterial({ color: 0x34495e });
  // je crée un cube rouge
  const cubeMat_red = new THREE.MeshPhongMaterial({ color: 0xc0392b });

  cube = new THREE.Mesh(cubeGeo, cubeMat);
  //je créer un autre cube qui sera enfant du premier
  cubered = new THREE.Mesh(cubeGeo, cubeMat_red);
  // je crée un clone de cube
  const cubeclone = cube.clone();

  // scale Modifie la longeur(x), la hauteur(y) et la largeur(z) de cube
  cube.scale.set(2, 0.1, 2);
  // je Modifie la longeur(x), la hauteur(y) et la largeur(z) de cubered
  cubered.scale.set(0.5, 0.5, 0.5);
  // je place le cubered au dessus de sont parent cube
  cubered.position.set(0, 200, 0);
  //je modifie la position de cubeclone
  cubeclone.scale.set(0.5, 0.5, 0.5);
  // je change la position de cubeclone
  cubeclone.position.y = 405;
  // je Modifie la longeur(x), la hauteur(y) et la largeur(z) de cubered
  cubeclone.scale.set(2, 0.1, 2);

  // on ajoute cubered comme enfant du cube
  cube.add(cubered);
  // j'ajoute cube a la scene
  scene.add(cube);
  //j'ajoute cubeclone a la scène
  scene.add(cubeclone);

  render();
}

function render() {
  // la rotation n'est effectuer que sur cube, mais comme cube red est sont enfant il tourne aussi
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.01;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

init();
```
