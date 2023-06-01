import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { Button, message, Upload } from "antd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { employeeAction } from "../../redux/ReducerEmployee/reducerEmployee";
interface ImageUploaderProps {
  onImageUpload: (binaryData: File) => void;
  isShowUploadList: boolean;
  isMultiple: boolean;
}

const UpLoadFile: React.FC<ImageUploaderProps> = ({
  onImageUpload,
  isShowUploadList,
  isMultiple,
}) => {
  const [listImg, setImg] = React.useState();
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const file = event.file.originFileObj;
    onImageUpload(file);
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     const binaryData = reader.result as ArrayBuffer;
    //     console.log("a", binaryData); // dat
    //     onImageUpload(binaryData);
    //   };
    //   reader.readAsArrayBuffer(file);
    // }
  };
  const handleUpload = () => {
    // dispatch(employeeAction.addEmployeeImage("helo"));
  };

  return (
    <Upload
      showUploadList={isShowUploadList}
      name="uploadFile"
      maxCount={10}
      multiple={isMultiple}
      onChange={handleFileChange}>
      <Button
        onClick={handleUpload}
        className="
         fontFamily  border-dotted border-2 border-[#a6e8fcee] bg-inherit text-[#2ca1c5]"
        icon={<UploadOutlined />}>
        Upload
      </Button>
    </Upload>
  );
};

export default UpLoadFile;
