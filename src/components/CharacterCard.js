import React from "react";
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


export default function CharacterCard(props) {
  const {image, name, episodes, created} = props;
  return (
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>Appeared in {episodes} episodes</CardText>
          <CardText>
            <small className="text-muted">Created on {created} </small>
          </CardText>
        </CardBody>
      </Card>
  );
}
