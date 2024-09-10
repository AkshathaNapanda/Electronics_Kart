import React from "react";

function AllOrders() {
  const orderList=[{name: "Neelam", email: "neelam@gmail.com", phone: "8798765657", address: "Kerala", product: "Flexible PCBs", price: "900", items: "1", status:0},
  {name: "Sonam", email: "sonam@gmail.com", phone: "9876543210", address: "Madikeri", product: "Raspberry-Pi-4", price: "1500", items: "2", status:1},
  {name: "Aishwarya ", email: "aishwarya@gmail.com", phone: "8796785756", address: "Bidar", product: "F4 X 6 CM UNIVERSAL PROTOTYPE BOARD", price: "800", items: "1", status:1}];
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  const orderStatus = () => {
    setPopupOpen(!isPopupOpen);
  };

  const deleteOrder = (id) => {
   window.confirm("Are You Sure Want to Delete ?")
  };

  return (<>
                {isPopupOpen && (
          <div className="overlay">
            <div className="dialog">
              <div>
          <div className="card" style={{position:"inherit"}}>
            <div className="card-header">
              <h4>Edit Status</h4>
            </div>
            <div className="card-body">
              <label className="mb-2">Select Status</label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option value="" selected>
                Shipped
                </option>
                <option value="" selected>
               Delivered 
                </option>
                <option value="" selected>
                Cancel
                </option>
              </select>
              <button
                type="button"
                className="btn btn-primary"
                onClick={orderStatus}
              >
                Save
              </button>
              <button
                      type="button"
                      className="btn btn-warning mx-2"
                      onClick={orderStatus}
                    >
                      Cancel
                    </button>
            </div>
          </div>
              </div>{" "}
            </div>
          </div>
        )}
    <div className="container">
      <div className="row g-4 my-4">
        <div className="col-12">
          <h3 className="title-sm">Recent Orders</h3>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Customer ID</th>
                <th>Customer Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>No of Items</th>
                <th>Action</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((data, key) => {
                return (
                  <tr>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.address}</td>
                    <td>{data.product}</td>
                    <td>{data.price}</td>
                    <td>{data.items}</td>
                    <td>
                      {parseInt(data.status) ? (
                        <button className="btn btn-success" disabled>
                          Delivered
                        </button>
                      ) : (
                        <button
                          className="btn btn-warning"
                          onClick={() =>
                            orderStatus(
                              data.id,
                              "1",
                              data.product,
                              data.email,
                              data.meter
                            )
                          }
                        >
                          Complete
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteOrder(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div></>
  );
}

export default AllOrders;
