import React from "react";
import {
  Button,
  Col,
  Container,
  // Container,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";

function ModalCreateNewProduct({ showModal, onHandleCloseModal }) {
  return (
    <Container>
      <Modal
        isOpen={showModal}
        toggle={onHandleCloseModal}
        className="custom-modal"
        size="lg"
      >
        <ModalHeader toggle={onHandleCloseModal}>
          Create New Product
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label>Title</Label>
                  <Input name="text" type="text" />
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>Price</Label>
                  <Input name="Price" type="number" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Quantity</Label>
                  <Input name="Quantity" type="number" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Color</Label>

                  <Input id="exampleSelect" name="select" type="select">
                    <option>Black</option>
                    <option>Gold</option>
                    <option>White</option>
                    <option>Green</option>
                    <option>Gray</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <h6 for="Desciption">Product Details</h6>
              <Col md={4}>
                <FormGroup>
                  <Label>Warranty Period</Label>
                  <Input name="text" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>RAM</Label>
                  <Input name="text" type="select">
                    <option>4GB</option>
                    <option>6GB</option>
                    <option>8GB</option>
                    <option>12GB</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>ROM</Label>
                  <Input name="text" type="select">
                    <option>64GB</option>
                    <option>128GB</option>
                    <option>256GB</option>
                    <option>512GB</option>
                    <option>1TB</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Battery</Label>
                  <Input name="text" type="text" />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Screen Size</Label>
                  <Input name="text" type="text" />
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>OS Support</Label>
                  <Input name="text" type="select">
                    <option>IOS</option>
                    <option>Android</option>
                    <option>Window Phone</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <FormGroup>
              <h6 for="Desciption">Product Desciption</h6>
              <Input id="Desciption" name="Desciption" type="textarea" />
            </FormGroup>
            {/* Thêm phần input cho ảnh sản phẩm */}
            <FormGroup>
              <h6 for="productImage">Product Image</h6>
              <Input
                id="productImage"
                name="productImage"
                type="file"
                accept="image/*"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Create</Button>
          <Button color="secondary" onClick={onHandleCloseModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
}

export default ModalCreateNewProduct;
