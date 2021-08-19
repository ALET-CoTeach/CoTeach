import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
// import ImgCrop from 'antd-img-crop'; possible to add this to crop to a sqaure (good for social media stuffs)

const getBase64 = (file) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = (error) => reject(error);
});

const UploadMedia = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  //   {
  //     uid: '-1',
  //     name: 'image.png',
  //     status: 'done',
  //      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-2',
  //     name: 'image.png',
  //     status: 'done',
  //      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-3',
  //     name: 'image.png',
  //     status: 'done',
  //      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-4',
  //     name: 'image.png',
  //     status: 'done',
  //      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-xxx',
  //     percent: 50,
  //     name: 'image.png',
  //     status: 'uploading',
  //      'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  //   },
  //   {
  //     uid: '-5',
  //     name: 'image.png',
  //     status: 'error',
  //   },

  const handleCancel = () => setPreviewVisible(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ newFileList }) => setFileList({ newFileList });

  const uploadButton = (
    <>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </>
  );

  return (
    <>
      <h2>Please Upload Media</h2>
      <p>We recommend anywhere from 1 to 3 photos/videos!</p>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  );
};

export default UploadMedia;
