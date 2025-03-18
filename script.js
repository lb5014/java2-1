document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 5, 10);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 10, 5);
  scene.add(directionalLight);

  function createBlock(x, y, z, color = 0x8B4513) {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshStandardMaterial({ color });
      const block = new THREE.Mesh(geometry, material);
      block.position.set(x, y, z);
      scene.add(block);
      return block;
  }

  const worldSize = 10;
  for (let x = -worldSize / 2; x < worldSize / 2; x++) {
      for (let z = -worldSize / 2; z < worldSize / 2; z++) {
          createBlock(x, 0, z, 0x228B22);
      }
  }

  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
  });
});