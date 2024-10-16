import { Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';

interface Props {
    visible: boolean
}
export default function AllergyModal(props: Props) {

    const [visible, setVisible] = useState(props.visible);

    useEffect(() => {

        const popup_shown = sessionStorage.getItem("popup_shown");
        if (popup_shown != "1") {
            sessionStorage.setItem("popup_shown", "1");
        }
    }, []);

    return (
        <>
            <Modal centered keyboard show={visible} onHide={() => setVisible(false)}>
                <Modal.Header closeButton>
                    {/*<Modal.Title>Food Allergies And Intolerance</Modal.Title>*/}
                    <Modal.Title>Important Notice</Modal.Title>
                </Modal.Header>
                {/*<Modal.Body>
                    <p>Please note that our Chinese food items are temporarily unavailable.</p>
                    <p>We apologize for any inconvenience and appreciate your understanding.</p>
                </Modal.Body>*/}
                <Modal.Body>
                    <p>Some of our dishes contain:</p>
                    <p><b>Celery, Cereals Containing Gluten, Crustaceans, Egg, Fish, Lupin, Milk, Mustard, Molluscs, Peanuts, Sesame Seeds, Soya, Nuts, Sulphur Dioxide</b></p>
                    <p>which some people may have a reaction to.</p>
                    <p>Please inform our staff before ordering if you suffer from any food allergies. We will do our best to advise you.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setVisible(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}