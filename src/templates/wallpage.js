export const wallTemplate = () => {
  const containerWall = document.createElement('section');
  containerWall.className = 'wall-section';
  containerWall.id = 'wall-section';
  const wallPost = `
  <p> hola </p>
  `;
  containerWall.innerHTML = wallPost;
  return containerWall;
};
