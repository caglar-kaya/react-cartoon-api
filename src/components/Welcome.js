import '../css/components/Welcome.css'

function Welcome() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-container-title">
        Welcome to Rick and Morty API App
      </h1>
      <p className="welcome-container-paragraph">
        Rick and Morty is an American adult animated science fiction sitcom
        created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
        programming block, Adult Swim.
      </p>
      <p className="welcome-container-paragraph">
        In application, when you start it or reload the page, you can
        display 20 characters out of 826 characters randomly and also you can
        search for characters according to their names and status.
      </p>
    </div>
  );
}

export default Welcome;
