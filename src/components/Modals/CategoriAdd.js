import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
const CategoriAdd = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    카테고리 추가
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicCategoriAdd">
                        <Form.Label>카테고리 추가</Form.Label>
                        <Form.Control type="text" placeholder="추가할 카테고리를 입력하세요" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="button">
                    ADD
                </Button>
                <Button onClick={onHide}>모달 닫기</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CategoriAdd;