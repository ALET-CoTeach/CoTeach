import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import '../../../../index.css';
import { Modal, Button } from 'antd';

class TableModal extends React.Component {
    render() {
        const [visible, setVisible] = useState(false);
        const tablemodal = this.props.tablemodal;
        return (  
            <>
                <Button block type="primary" onClick={() => setVisible(true)}>
                    View More
                </Button>
                <Modal
                    title="Lesson Details"
                    centered
                    visible={visible}
                    onOk={() => setVisible(false)}
                    onCancel={() => setVisible(false)}
                    width={1000}
                >
                    <p>{tablemodal.term}</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                </Modal>
            </>
        );
    };
};

export default TableModal;