import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyAlert = ({variant,msg,url,txtUrl}) =>{
    return (
        <Alert key={variant} variant={variant}>
          {msg}{' '}
          <Alert.Link href={url}>{txtUrl}</Alert.Link>
        </Alert>
    )
}

export default MyAlert
