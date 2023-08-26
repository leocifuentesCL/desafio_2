import { useState } from 'react'
import Alert from '../Alert/Alert'

const Form = () => {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const [email, setEmail] = useState('');

  // aquí usé el sistema de expresiones regulares que enseñó mi profesor anterior, en la generación G-32.
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

  const handleConfirmPassword = () => {
    if (pass === confirmPass) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  //aquí llamo a la función para confirmar la expresión regular.
    handleConfirmEmail();
  };

  // aquí creé la función que confirma la expresión regular definida en línea 10.
  const handleConfirmEmail = () => {
    if (emailRegex.test(email) === false) {
      alert('Ingresa un correo válido');
    }
  }

  const handlerSend = (e) => {
    handleConfirmPassword();
    e.preventDefault();
    //console.log('pasé!');
  }

  return (
    <form onSubmit={handlerSend}>
      <div className="form-group">
        <label htmlFor="exampleInputName"/>
        <input type="name" className="form-control" id="exampleInputName" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1"/>
        <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1"/>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Pass" value={pass} onChange={(e) => setPass(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2"/>
        <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Pass" value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success">Check Password</button>
      {showAlert && (
        <Alert texto="¡Éxito!" color="success" />
      )}
      {!showAlert && (
        <Alert texto="¡Tu contraseña no coincide!" color="danger" />
      )}
    </form>
  );
}

export default Form
