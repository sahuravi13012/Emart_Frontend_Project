import React, { useState, useEffect } from "react";
import { Table, Switch } from "antd";
import "../../CssFiles/users.css";
import { DeleteFilled } from "@ant-design/icons";
import axios from "axios";
import config from "../../config";

function Retailers() {
  // const [loading, setloading] = useState([0]);

  const [getdata, setGetData] = useState([]);
  const toggleStatus = async (retailerId, newStatus) => {
    try {
      const data111 = await axios.put(
        `${config.URL}/updatestatus/${retailerId}/status`,
        {
          status: newStatus,
        }
      );
      getCategoryData();
    } catch (error) {
    }
  };

  const getCategoryData = async () => {
    const retailerData = await axios.get(`${config.URL}/viewretailer`);
    setGetData(retailerData.data.Response);
  };
  const deleteRetailer = async (retailerId) => {
    if (window.confirm(`You want to delete data of Id no: =  ${retailerId} `)) {
      try {
        await axios.delete(`${config.URL}/deleteretailer/${retailerId}`);
        getCategoryData();
      } catch (error) {
      }
    }
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  const [page, setPage] = useState(2);
  const [pageSize, setPageSize] = useState(5);

  const columns = [
    {
      title: "Retailer Id ",
      dataIndex: "retailer_id",
      key: "retailer_id",
    },
    {
      title: "Owner Name ",
      dataIndex: "owner_name",
      key: "owner_name",
    },
    {
      title: "Shop_name ",
      dataIndex: "shop_name",
      key: "shop_name",
    },
    {
      title: "Mobile No",
      dataIndex: "contact_no",
      key: "contact_no",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Retailer Id ",
      dataIndex: "retailer_id",
      key: "retailer_id",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (data, record) => {
        return (
          <Switch
            checked={data === "active"}
            onChange={(checked) => {
              const newStatus = checked ? "active" : "inactive";
              toggleStatus(record.retailer_id, newStatus);
            }}
          />
        );
      },
    },

    {
      title: "Action",
      render: (data) => {
        return (
          <>
            {/* <Update_category data={data} getCategoryData={getCategoryData} /> */}
            <DeleteFilled
              onClick={() => deleteRetailer(data.retailer_id)}
              style={{ color: "red", padding: "10px", fontSize: "20px" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col mt-5">
            <Table
              className="mt-2"
              columns={columns}
              dataSource={getdata}
              // loading={loading}
              pagination={{
                current: page,
                pageSize: pageSize,
                onChange: (page, pageSize) => {
                  setPage(page);
                  setPageSize(pageSize);
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Retailers;
