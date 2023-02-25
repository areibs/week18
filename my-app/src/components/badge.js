import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

export default class NotificationBadge extends React.Component {
  render() {
    return  <Button variant="light">
      <Badge bg="success">3</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  
}};

