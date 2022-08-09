# TEXTURE

```js

[---]
// je créer l'instance texture
const loader = new THREE.TextureLoader();

loader.load("./assets/textures/Itachi.png", (loaded_texture) => {
  // => Obtion de filtrage:

  // magFilter => LinearFilter
  loaded_texture.magFilter = THREE.LinearFilter;
  // magFilter => NearestFilter
  loaded_texture.magFilter = THREE.NearestFilter;
  // minFilter => NearestMipmapNearestFilter
  loaded_texture.minFilter = THREE.NearestMipmapNearestFilter;

  // => Répétition des textures

  loaded_texture.repeat.set(1, 1);

  // => Regle de répétion

  // étire la texture
  loaded_texture.wrapS = THREE.ClampToEdgeWrapping;
  loaded_texture.wrapT = THREE.ClampToEdgeWrapping;

  // Fait une répétion de la texture
  loaded_texture.wrapS = THREE.RepeatWrapping;
  loaded_texture.wrapT = THREE.RepeatWrapping;

  // Fait une répétion avec effet miroire
  loaded_texture.wrapS = THREE.MirroredRepeatWrapping;
  loaded_texture.wrapT = THREE.MirroredRepeatWrapping;

  // Deplacer la texture
  loaded_texture.offset.set(1, 1);

  // Tourner la texture

  // Définir le centre de la texture :
  loaded_texture.center.set(0.5, 0.5);
  // Une valeur de rotation :
  loaded_texture.rotation = Math.PI / 4;

  const cubeMatPhong = new THREE.MeshPhongMaterial({
    //J'applique la texture au material
    map: loaded_texture,
  });
  const cubeGeo = new THREE.BoxGeometry(300, 300, 300);
  cube = new THREE.Mesh(cubeGeo, cubeMatPhong);
  scene.add(cube);

  [---]
});
```
