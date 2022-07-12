import styled from '@emotion/styled';
import React, { FC, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { FormularioButton } from './Filtrado';
//import "bootstrap/dist/css/bootstrap.min.css";
type InfoModalProps = {
    titleEn: string, titleNat: string, format: string, popularity: number, coverImg: any, episodes: number
    visibility: boolean,
    changeVisibility: (text: boolean) => void;
};

export const InfoModal: FC<InfoModalProps> = ({ visibility, changeVisibility, titleEn, titleNat, format, popularity, coverImg, episodes }) => {

    const [show, setShow] = useState<boolean | undefined>(undefined);
    const handleClose = () => setShow(false);

    useEffect(() => {
        if (visibility) {
            setShow(visibility)
        }
    }, [visibility])

    return (
        <div className="info-modal">
            {/* <Button className="nextButton" onClick={handleShow}>
          Open Modal
        </Button> */}


            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header>
                    <Modal.Title>
                        {titleEn}
                        {!titleEn && titleNat}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mod" >
                        <DivInfo className="info" >
                            <div> Nº Episodes {episodes | 0} </div>
                            <div > Popularity rate {popularity} </div>
                        </DivInfo>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <FormularioButton onClick={() => {
                        changeVisibility(false)
                        handleClose()
                    }}>
                        Close
                    </FormularioButton>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


const DivInfo = styled.div`

    width: 50%;
    border: 2px solid white;
  `
