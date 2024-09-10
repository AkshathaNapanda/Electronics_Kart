import React, { useState } from "react";

function ManageProduct() {
  const categoryList = [];

  const [category, setCategory] = useState("");

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [isPopupOpen, setPopupOpen] = React.useState(false);

  const handlePopupClick = () => {
    setPopupOpen(!isPopupOpen);
  };
  const productList = [
    { name: "Arduino Uno R3 Mega328p Development Board", quantity: "50", price: "1500", status:"1" },
    { name: "Arduino Unveils Arduino Zero Board", quantity: "150", price: "600", status:"1"  },
    { name: "Raspberry-Pi-4", quantity: "20", price: "600", status:"0"  },
    { name: "Arduino Nano", quantity: "60", price: "650", status:"0"  },
    { name: "4 X 6 CM UNIVERSAL PROTOTYPE BOARD", quantity: "40", price: "800", status:"0"  },
    { name: "High-Density interconnect PCB (HDI)", quantity: "30", price: "950", status:"0"  },
    { name: "Flexible PCBs", quantity: "80", price: "900", status:"0"  },
    { name: "Raspberry Pi Zero W / WH", quantity: "20", price: "800", status:"0"  },
    { name: "Raspberry Pi 1 Model A", quantity: "20", price: "750", status:"0"  },
    { name: "Arduino Mega2560 Rev3", quantity: "10", price: "850", status:"0"  },
  
  ];

  let isValid = true;
  const [errorMsg, setErrorMsg] = useState("");

  const makeValidation = () => {
    if (category === "") {
      isValid = false;
      setErrorMsg("Category is required");
    } else if (name === "") {
      isValid = false;
      setErrorMsg("Product Name is required");
    } else if (quantity === "") {
      isValid = false;
      setErrorMsg("Quantity is required");
    } else if (price === "") {
      isValid = false;
      setErrorMsg("Price is required");
    } else if (fileName === "") {
      isValid = false;
      setErrorMsg("Image is required");
    } else {
      isValid = true;
      setErrorMsg("");
    }
  };

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const saveProduct = () => {
    makeValidation();
    if (isValid) {
      alert("Product added successfully!");
    }
  };

  const changeProductStatus = (id, status) => {
    alert("Changed status successfully!");
  };

  const delProduct = (id) => {
    window.confirm("Are You Sure Want to Delete ?");
  };

  return (
    <>
              {isPopupOpen && (
          <div className="overlay">
            <div className="dialog">
              <div>
          <div className="card" style={{position:"inherit"}}>
            <div className="card-header">
              <h4>Edit Products</h4>
            </div>
            <div className="card-body">
              {errorMsg ? (
                <div class="alert alert-danger alert-msg-cst mb-3" role="alert">
                  {errorMsg}
                </div>
              ) : (
                ""
              )}
              <label className="mb-2">Select Category</label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected>
                Arduino Boards
                </option>
                <option value="" selected>
                Raspberry Pi 
                </option>
                <option value="" selected>
                Pcb
                </option>
                {categoryList.map((data, key) => {
                  return <option value={data.id}>{data.category}</option>;
                })}
              </select>
              <label className="mb-2">Product Name</label>
              <input
                type="text"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="mb-2">Product Quantity</label>
              <input
                type="number"
                className="form-control mb-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label className="mb-2">Product Price</label>
              <input
                type="number"
                className="form-control mb-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <label className="mb-2">Upload Image</label>
              <input
                type="file"
                className="form-control mb-3"
                onChange={saveFile}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={handlePopupClick}
              >
                Save
              </button>
              <button
                      type="button"
                      className="btn btn-warning mx-2"
                      onClick={handlePopupClick}
                    >
                      Cancel
                    </button>
            </div>
          </div>
              </div>{" "}
            </div>
          </div>
        )}
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-4 my-5">
          <div className="card" style={{position:"inherit"}}>
            <div className="card-header">
              <h4>Add Products</h4>
            </div>
            <div className="card-body">
              {errorMsg ? (
                <div class="alert alert-danger alert-msg-cst mb-3" role="alert">
                  {errorMsg}
                </div>
              ) : (
                ""
              )}
              <label className="mb-2">Select Category</label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="" selected>
                Arduino Boards
                </option>
                <option value="" selected>
                Raspberry Pi 
                </option>
                <option value="" selected>
                Pcb
                </option>
                {categoryList.map((data, key) => {
                  return <option value={data.id}>{data.category}</option>;
                })}
              </select>
              <label className="mb-2">Product Name</label>
              <input
                type="text"
                className="form-control mb-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="mb-2">Product Quantity</label>
              <input
                type="number"
                className="form-control mb-3"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label className="mb-2">Product Price</label>
              <input
                type="number"
                className="form-control mb-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <label className="mb-2">Upload Image</label>
              <input
                type="file"
                className="form-control mb-3"
                onChange={saveFile}
              />
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="col-8 my-5">
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((data, key) => {
                return (
                  <tr>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.quantity}</td>
                    <td>{data.price}</td>
                    <td>
                    <button
                      className="btn btn-sm border-dark"
                      onClick={() => handlePopupClick()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </button>
                  </td>
                    <td>
                      {parseInt(data.status) ? (
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => changeProductStatus(data.id, "0")}
                        >
                          Deactivate
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => changeProductStatus(data.id, "1")}
                        >
                          Activate
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => delProduct(data.id)}
                      >
                        {" "}
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

export default ManageProduct;
