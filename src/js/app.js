import createProject from './Project';

export default React => {
  const Project = createProject(React);

  const app = () => (
    <div>
      <h1 className="title">Gallery</h1>
      <div className="projectBox">
        <Project
          imgsrc="http://cdn.theatlantic.com/assets/media/img/photo/2015/11/images-from-the-2016-sony-world-pho/s01_130921474920553591/main_900.jpg?1448476701"
          name="proj1"
        />
      </div>
    </div>
  );

  return app;
};
