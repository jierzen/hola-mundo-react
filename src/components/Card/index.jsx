import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyCard = ({
    title,
    imgUrl,
    description,
    bgColor,
    widthCard,
    children
}) => {

    return(
    <Card style={{ width: widthCard }} className={bgColor}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          {children}
        </Card.Body>
      </Card>
    )
}

export default MyCard;