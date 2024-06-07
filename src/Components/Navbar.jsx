import React from "react";
import { Dropdown, message } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleMenuClick = (e) => {
    message.info("Click on menu item.");
    console.log("click", e);
  };
  const items = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-md shadow"
        style={{ backgroundColor: "##f4f8ff", position: "sticky" }}
      >
        <span>
          <h4
            className="text-center mt-1"
            style={{ color: "#000000", backgroundColor: "" }}
          >
            E-mart
          </h4>
        </span>
        {/* <div className="container"> */}
        {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
        {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="btn-group">
                <button
                  type="button"
                  // className="btn btn-danger dropdown-toggle"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    // padding: "0.2rem 0.5rem",
                    // fontSize: "0.8rem",
                    width: "auto",
                  }}
                >
                  <Avatar
                    size={{ xl: 30, xxl: 40 }}
                    // src={items.profile_photo}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhbwPZPK2Epd0KCk9qANZweJlai8Fi1AXhnA&usqp=CAU"
                  />
                </button>
                <ul className="dropdown-menu" style={{ fontSize: "0.8rem" }}>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#" onClick={logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>*/}
        <Dropdown.Button menu={menuProps} placement="bottom">
          <UserOutlined style={{ color: "#FFFFFF", fontWeight: "bolder" }} />
        </Dropdown.Button>
        {/* </div> */}
      </nav>
    </>
  );
}

export default Navbar;
