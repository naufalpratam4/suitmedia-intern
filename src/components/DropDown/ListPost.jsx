import React from "react";
import { Form, Row, Col } from "react-bootstrap";

function ListPost({ itemsPerPage, onItemsPerPageChange }) {
  return (
    <Form.Group as={Row} controlId="itemsPerPageDropdown" className="mb-3">
      <Form.Label column sm={3}>
        Show per page:
      </Form.Label>
      <Col sm={9}>
        <Form.Control
          as="select"
          value={itemsPerPage}
          onChange={onItemsPerPageChange}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </Form.Control>
      </Col>
    </Form.Group>
  );
}

export default ListPost;
