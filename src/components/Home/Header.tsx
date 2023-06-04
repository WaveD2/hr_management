import logoBF from "../../assets/img/logoBF.png";
import React, { useState, useEffect } from "react";
import { Layout, Select, Avatar, Space, Modal, Tag, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import callAPI from "../../services/fetchApi";
import { useDispatch } from "react-redux";
import { API_PATHS } from "../../services/api";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";
import TitleComponents from "../TitleComponents";
import { statusAction } from "../../redux/ReducerStatus/reducerStatus";
import ModalComponent from "../Modal";
import "./style.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { ACCESS_TOKEN_KEY } from "../../constants/validate";

const Header = () => {
  const { Header } = Layout;
  const { i18n, t } = useTranslation(["home"]);
  const currentLang = locales[i18n.language];
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenLogout, setIsModalOpenLogout] = useState(false);
  const [isModalChildren, setIsModalChildren] = useState(false);
  const [detailUser, setDetailUser] = useState<any>();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleChange = (value: string) => {
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
  };

  const handleLogout = () => {
    callAPI({
      baseUrl: API_PATHS.defaultAPI,
      isUrlParams: false,
      method: "POST",
      params: "logout",
    });
    Cookies.remove(ACCESS_TOKEN_KEY);
    navigate("/auth/login");
  };

  useEffect(() => {
    callAPI({
      baseUrl: API_PATHS.defaultAPI,
      isUrlParams: false,
      method: "GET",
      params: "user/detail",
    })
      .then((res) => setDetailUser(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="w-full relative h-16 ">
      <Header
        className=" fixed top-0 left-0 right-0 z-50 w-[100vw]  flex items-center justify-between"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0px 3px 15px #ECEEF0",
        }}>
        <div className="flex items-center gap-4">
          <img
            src={logoBF}
            alt="logo"
            style={{ height: "46px", width: "46px", objectFit: "cover" }}
          />
          <TitleComponents title={`HR ${t("home lang.management system")}`} />
        </div>

        <div className="wrapper flex items-center gap-4 relative ">
          <Select
            className="w-[150px] overflow-hidden "
            defaultValue={currentLang}
            onChange={handleChange}
            options={[
              { value: "en", label: "English" },
              { value: "vi", label: "Tiếng Việt" },
            ]}
          />

          <Space wrap size={16}>
            <Avatar
              icon={<UserOutlined />}
              onClick={() => setIsModalOpen((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />
          </Space>

          <Modal
            mask={false}
            open={isModalOpen}
            onCancel={handleCancel}
            className="modal-header absolute top-16 right-11 bg-[#e4e2e2] rounded-xl">
            <div className="mt-2  h-full">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="https://i.pinimg.com/236x/3f/5f/9c/3f5f9c42033509e36bcc4ce3d8f2ed51.jpg"
                    alt="avatar"
                    style={{
                      width: "35px",
                      height: "35px",
                      objectFit: "cover",
                      borderRadius: "100%",
                    }}
                  />
                  <h3 className="text-2xl font-normal ">
                    {detailUser?.employee.name}
                  </h3>
                </div>

                <Tag color="purple">{detailUser?.position_name}</Tag>
              </div>

              <div className="py-2 text-base font-normal mt-4">
                <p className="mb-2">{detailUser?.department_name}</p>
                <p>Staff ID: {detailUser?.employee.staff_id}</p>
              </div>

              <Button
                block
                onClick={() => setIsModalOpenLogout(true)}
                style={{
                  margin: "10px 0",
                  padding: "8px 22px",
                  height: "48px",
                  color: "rgb(251, 253, 255)",
                  backgroundColor: " rgb(0, 145, 255)",
                }}>
                Sign Out
              </Button>

              <a href="#">
                <span className="text-[#1c91eb]"> Reset password</span>
              </a>
            </div>
          </Modal>
        </div>
      </Header>

      <Modal
        centered
        style={{ fontSize: "24px" }}
        title="Do you have logout?"
        open={isModalOpenLogout}
        cancelText={"No"}
        okText={"Ok"}
        onOk={handleLogout}
        onCancel={() => setIsModalOpenLogout(false)}
      />
    </section>
  );
};

export default Header;
