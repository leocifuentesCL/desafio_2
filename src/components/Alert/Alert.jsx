    const Alert = ({ texto, color }) => {
    return (
      <div className={`alert alert-${color}`} role="alert">{texto}</div>
    );
  };

  export default Alert
