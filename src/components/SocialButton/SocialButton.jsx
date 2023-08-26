import { Button } from 'react-bootstrap';

const socialButton = ({ icon }) => {
    return (
        <Button variant="link" href="#">{icon}</Button>
    );
}

export default socialButton
