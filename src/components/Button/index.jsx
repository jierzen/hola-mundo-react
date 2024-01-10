import Button from 'react-bootstrap/Button';

const MyButton = ({variant,txtBtn,onClick}) => {
    return (
        <Button variant={variant} onClick={onClick}>{txtBtn}</Button>
    )
}

export default MyButton