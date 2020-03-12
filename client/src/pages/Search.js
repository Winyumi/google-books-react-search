import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Search() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  // Save book
  function saveBook(data) {
    API.saveBook(data)
      .then(() =>
        alert('Book saved.')
      )
      .catch(err => console.log(err));
  };

  // Search books
  async function searchBooks(query) {
    await API.searchBooks(query)
      .then(res => {
        setBooks(res)
      })
      .catch(err => console.log(err));
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <form>
            <Input
              onChange={(e) => {setFormObject({...formObject, query: e.target.value});}}
              name="query"
              placeholder="Enter your keywords..."
            />
            <FormBtn
              disabled={!formObject.query}
              onClick={(e) => {e.preventDefault(); searchBooks(formObject.query);}}
            >
              Lookup
            </FormBtn>
          </form>
        </Col>
      </Row>
      <Row>
        <Col>
          {books.length ? (
            <List>
              {books.map(book => {
                return (
                  <ListItem key={book.id}>
                    <p><img src={book.image} alt={book.title} /></p>
                    <p><strong>{book.title}</strong>{book.authors ? " by " + book.authors : ""}</p>
                    <p>{book.description}</p>
                    <p><a href={book.link} target="_blank" rel="noopener noreferrer">Details</a></p>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}


export default Search;
