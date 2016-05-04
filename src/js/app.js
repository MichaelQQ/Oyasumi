import createProject from './Project';

export default React => {
  const Project = createProject(React);

  const app = () => (
    <div>
      <h1>Gallery</h1>
      <Project name="proj1" />
    </div>
  );

  return app;
};
