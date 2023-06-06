import React, { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
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
 
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png"
    }
  ]);


  const handleFileChange = (event) => {
    let newFileList = [...event.fileList];
    newFileList = newFileList.slice(-1);
    newFileList = newFileList.map((file) => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });

    setFileList(newFileList);
    onImageUpload(event.file.originFileObj)
     
 
  };
  const handleUpload = () => {
    // dispatch(employeeAction.addEmployeeImage("helo"));
  };


  console.log("fileList" ,fileList);
  
  return (
    <Upload
      showUploadList={isShowUploadList}
      name="uploadFile"
      maxCount={10}
      fileList={fileList}
      multiple={isMultiple}
      onChange={handleFileChange}>
      <Button
        onClick={handleUpload}
        className="
         fontFamily  border-dotted border-2 border-[#a6e8fcee] bg-inherit text-[#2ca1c5]"
        icon={<UploadOutlined />}>
        Upload
      </Button>
      <span>Thiếu </span>
    </Upload>
  );
};

export default UpLoadFile;
