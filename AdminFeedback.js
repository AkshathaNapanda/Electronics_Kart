import React from "react";

function AdminFeedback() {
  const feedbackList=[{name: "Sonam ", product: "Raspberry-Pi-4", message: "The product is very good"},
  {name: "Aishwarya", product: "4 X 6 CM UNIVERSAL PROTOTYPE BOARD", message: "The product is very good"}];


  return (
    <div className="container">
      <div className="row g-4 my-4">
        <div className="col-12">
          <h3 className="title-sm">Feedback</h3>
        </div>
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Customer Name</th>
                <th>Product Name</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {feedbackList.map((data, key) => {
                return (
                  <tr>
                    <td>{key + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.product}</td>
                    <td>{data.message}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminFeedback;
