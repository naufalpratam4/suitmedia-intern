import React, { useState } from "react";
import CardComponent from "../Card/CardComponent";
import { Col, Container, Row, Form } from "react-bootstrap";
import PaginationPages from "../Pagination/Pagination";
import ListPost from "../DropDown/ListPost";

function CardList({ coinsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = Math.ceil(coinsData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCoinsData = coinsData.slice(startIndex, endIndex);

  return (
    <>
      <Container className="mt-3">
        {/* Dropdown for selecting items per page */}
        <ListPost
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />

        <Row className="mt-2">
          {currentCoinsData.map((coin) => (
            <Col
              key={coin.id}
              xs={12}
              sm={6}
              lg={3}
              className="pb-2 d-flex justify-content-center"
            >
              <CardComponent
                image={coin.image}
                name={coin.name}
                price={coin.current_price}
              />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <PaginationPages
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </Container>
    </>
  );
}

export default CardList;
