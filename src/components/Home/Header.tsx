import React, { useState, useEffect } from "react";
import { Layout, Select, Avatar, Space, Modal, Tag, Button } from "antd";
import logoBF from "../../assets/img/logoBF.png";
import Title from "../Title";
import { UserOutlined } from "@ant-design/icons";
import callAPI from "../../services/fetchApi";

const Header = () => {
  const { Header } = Layout;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailUser, setDetailUser] = useState<any>();
  useEffect(() => {
    callAPI({
      method: "GET",
      params: "user/detail",
    })
      .then((res) => setDetailUser(res.data.data))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
  };

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
          <Title title={"HR Management System"} />
        </div>

        <div className="flex items-center gap-4 relative">
          <Select
            labelInValue
            defaultValue={{ value: "lucy", label: "Lucy (101)" }}
            onChange={handleChange}
            options={[
              {
                value: "jack",
                label: "Jack (100)",
              },
              {
                value: "lucy",
                label: "Lucy (101)",
              },
            ]}
          />
          <Space wrap size={16}>
            <Avatar
              icon={<UserOutlined />}
              onClick={() => setIsModalOpen((prev) => !prev)}
              style={{ cursor: "pointer" }}
            />
          </Space>
          {isModalOpen && (
            <section className="absolute top-16 right-0 bg-[#e4e2e2] rounded-xl">
              <div className="py-5 px-6 mt-2 w-[322px]">
                <div>
                  <div className="flex items-center gap-4">
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
                      {detailUser.employee.name}
                    </h3>
                  </div>

                  <Tag color="purple">{detailUser.position_name}</Tag>
                </div>

                <div className="py-2 text-base font-normal">
                  <p className="mb-2">{detailUser.department_name}</p>
                  <p>Staff ID: {detailUser.employee.staff_id}</p>
                </div>

                <Button
                  block
                  style={{
                    padding: "8px 22px",
                    height: "48px",
                    color: "rgb(251, 253, 255)",
                    backgroundColor: " rgb(0, 145, 255)",
                  }}>
                  Sign Out
                </Button>

                <a href="#">Reset password</a>
              </div>
            </section>
          )}
        </div>
      </Header>
    </section>
  );
};

export default Header;
