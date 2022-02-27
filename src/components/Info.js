import '../css/components/Info.css';

function Info({number}) {
  return (
    <div className="info-container">
      <h3>You are displaying {number} characters out of 826 characters.</h3>
    </div>
  );
}

export default Info;
