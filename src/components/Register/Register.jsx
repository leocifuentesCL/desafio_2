import Form from '../Formulario/Form'
import SocialButton from '../SocialButton/SocialButton'

const Register = () => {
  //aquí guardé los icons antes de pasarlos al Button
  const socialIcon = <i className="fa-brands fa-facebook"></i>;
  const socialIcon2 = <i className="fa-brands fa-github"></i>;
  const socialIcon3 = <i className="fa-brands fa-linkedin"></i>;

  return (
  <div className="all">
    <div className="card register-card">
      <div className="card-body">
        <h5 className="card-title">Crea una cuenta</h5>

        <div className="card-text">
          <div className="icons">
          <SocialButton icon={socialIcon} />
          <SocialButton icon={socialIcon2} />
          <SocialButton icon={socialIcon3} />
          </div>
          <p>O usa tu email para registrarte</p>
          <Form />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register
