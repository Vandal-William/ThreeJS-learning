# GEOMETRY

```js
//Cone
const geocone = new THREE.ConeGeometry(300, 400, 64);
//Cylinder
const geocylinder = new THREE.CylinderGeometry(300, 300, 600, 62, 62);
//Sphere
const geosphere = new THREE.SphereGeometry(400, 64, 64);
//Plane
const geoplane = new THREE.PlaneGeometry(400, 400, 4, 4);
//Icosahedron
const geoicosahedron = new THREE.IcosahedronGeometry(400, 0);
//Tetrahedron
const geotetrahedron = new THREE.TetrahedronGeometry(400, 0);
//Octahedron
const geooctahedron = new THREE.OctahedronGeometry(400, 0);
//Circle
const geocircle = new THREE.CircleGeometry(
  400,
  64,
  Math.PI / 2,
  Math.PI + Math.PI / 2
);
//Ring
const georing = new THREE.RingGeometry(150, 400, 64, 64, 0, Math.PI * 2);
// Lathe
// 1. créer une structure de point
const points = [];
points.push(new THREE.Vector2(50, 100));
points.push(new THREE.Vector2(100, 100));
points.push(new THREE.Vector2(200, 400));
// 2. Le constructeur
const geolathe = new THREE.LatheGeometry(points, 64, Math.PI, Math.PI);
// Torus
const geoTorus = new THREE.TorusGeometry(400, 100, 64, 64, Math.PI);
// TorusKnot
const geoTorusKnot = new THREE.TorusKnotGeometry(400, 75, 64, 64, 6, 7);
```
