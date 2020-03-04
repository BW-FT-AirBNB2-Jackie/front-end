import React from 'react';
import { Card, Button, CardHeader, CardBody,
  CardTitle, CardText } from 'reactstrap';

const OwnerCard = (props) => {
  return (
    <div>
    <Card style={{width: '80%', marginLeft: '10%', marginTop: '4%', border: '1px solid darkgrey'}}>
      <CardHeader>{props.name}</CardHeader>
      <CardBody>
        <CardTitle>{props.role}</CardTitle>
        <CardText>{props.location}</CardText>
        <Button>Listings</Button>
      </CardBody>
    </Card>
    </div>
  );
};

export default OwnerCard;


