import React from 'react';
import { connect } from 'react-redux';
import { Modal, ModalBody, ModalHeader, Button, Col, Row, Label } from 'reactstrap';
import Header from './Header';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    }
  }
  
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  handleSubmit = (values) => {
    this.toggleModal();
    this.props.postComment(values.comment, values.uploadImage);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <br />
        
        <Button onClick={this.toggleModal}>
          <span className="fa fa-pencil-square-o"> Start a post</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Post</ModalHeader>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <Row className="form-group">
                <Label htmlFor="comment" md={12}>
                  Post Comment
                </Label>
                <Col md={12}>
                  <input type="textarea" name="comment" id="comment" row={5} className="form-control" />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="uploadImage" md={12}>
                  Upload Image
                </Label>
                <Col md={12}>
                  <input type="file" name="uploadImage" id="uploadImage" className="form-control" />
                </Col>
              </Row>
              <Button type="submit" value="submit" color="primary">
                Submit
              </Button>
            </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(Home);