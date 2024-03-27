import { Button, Modal } from 'react-bootstrap';

interface Props {
    showAllergyModal: boolean;
    setShowAllergyModal: (showAllergyModal: boolean) => void;
}

export default function AllergyModal(props: Props) {
    return (
        <>
            <Modal centered keyboard show={props.showAllergyModal} onHide={() => props.setShowAllergyModal(false)}>
                <Modal.Dialog>
                    <Modal.Header closeButton style={modalHeaderStyle}>
                        <Modal.Title>Food Allergies And Intolerance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={modalBodyStyle}>
                        <p>Some of our dishes contain:</p>
                        <p><b>Celery, Cereals Containing Gluten, Crustaceans, Egg, Fish, Lupin, Milk, Mustard, Molluscs, Peanuts, Sesame Seeds, Soya, Nuts, Sulphur Dioxide</b></p>
                        <p>which some people may have a reaction to.</p>
                        <p>Please inform our staff before ordering if you suffer from any food allergies. We will do our best to advise you.</p>
                    </Modal.Body>

                    <Modal.Footer style={modalFooterStyle}>
                        <Button variant="secondary" onClick={() => props.setShowAllergyModal(false)}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </>
    )
}

const modalHeaderStyle = {
    backgroundColor: '#76b1ff'
}

const modalBodyStyle = {
    backgroundColor: '#76b1ff'
}

const modalFooterStyle = {
    backgroundColor: '#76b1ff'
}