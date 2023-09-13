const Box = (props) => {
  const { className, name } = props;
  return (
    <div className={`box ${className}`}>
      <p className="para">{name}</p>
    </div>
  );
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="card-container">
      <Box className="box-1" name="Small" />
      <Box className="box-2" name="Medium" />
      <Box className="box-3" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
