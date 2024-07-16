import React, { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [saplings, setSaplings] = useState([]);
  const [saplingData, setSaplingData] = useState([]);
  const [warehouseData, setWarehouseData] = useState([]);

  useEffect(() => {
    // Fetch saplings data
    fetch("/src/assets/saplings_master.json")
      .then((response) => response.json())
      .then((data) => {
        setSaplings(data);
        console.log(data, "data");
      })
      .catch((error) => console.error("Error fetching saplings:", error));

    // Fetch warehouse data
    fetch("/src/assets/saplinginwardoutward.json")
      .then((response) => response.json())
      .then((data) => {
        setSaplingData(data.sapling_stock_res_by_sapling);
        setWarehouseData(data.sapling_stock_res_by_warehouse);
        // console.log(data, "warehouse data");
      })
      .catch((error) => console.error("Error fetching warehouse:", error));
  }, []);

// ================ROW 1=====================

  let newArr = saplings.map((sapling) => {
    
    let item = saplingData.find((item) =>
      item.sapling_item_name.includes(sapling.saplings_name)
    );
  
    
    if (item) {
      return item;
    }
  
    
    return {
      sapling_item_code: sapling.saplings_code,
      sapling_item_name: sapling.saplings_name,
      sum_sapling_inward: "0",
      sum_sapling_outward: "0",
      sapling_balance_stock: "0",
    };
  });

  // ========================Row 2=======================

  const filteredArr1 = warehouseData.filter(
    (item) => item.warehouse_name === "Dhawalgaon-Shinde Suresh Baban"
  );
  
  
  const dhawalgaonArray = saplings.map(fruit => {
    
    const match = filteredArr1.find(item => item.sapling_item_name === fruit.saplings_name);
    
    if (match) {
      
      return {
        name: fruit.saplings_name,
        inward: match.sum_sapling_inward,
        outward: match.sum_sapling_outward,
        balance: match.sapling_balance_stock,
      };
    } else {
      
      return {
        name: fruit.saplings_name,
        inward: "0",
        outward: "0",
        balance: "0",
      };
    }
  });


  // ========================Row 3=======================
  const filteredArr2 = warehouseData.filter(
    (item) => item.warehouse_name === "Ambad-Govind Ashok kumar Lahoti"
  );
  
  
  const ambadArray = saplings.map(fruit => {
    
    const match = filteredArr2.find(item => item.sapling_item_name === fruit.saplings_name);
    
    if (match) {
      
      return {
        name: fruit.saplings_name, 
        inward: match.sum_sapling_inward,
        outward: match.sum_sapling_outward,
        balance: match.sapling_balance_stock,
      };
    } else {
      
      return {
        name: fruit.saplings_name,
        inward: "0",
        outward: "0",
        balance: "0",
      };
    }
  });

  // ========================Row 4=======================

  const filteredArr3 = warehouseData.filter(
    (item) => item.warehouse_name === "Karjat-Navnath Ragunath Shinde"
  );
  
  
  const karjatArray = saplings.map(fruit => {
    
    const match = filteredArr3.find(item => item.sapling_item_name === fruit.saplings_name);
    
    if (match) {
      
      return {
        name: fruit.saplings_name, 
        inward: match.sum_sapling_inward,
        outward: match.sum_sapling_outward,
        balance: match.sapling_balance_stock,
      };
    } else {
      
      return {
        name: fruit.saplings_name,
        inward: "0",
        outward: "0",
        balance: "0",
      };
    }
  });


  return (
    <div>
      <h1>Sapling Stock by Wearhouse</h1>
      <table>
        <thead>
          <tr>
            <th colspan="4" className="frez heading">Warehouse Name</th>
            {saplings.map((sapling) => {
              return <th>{sapling.saplings_name}</th>;
            })}
          </tr>
          <tr>
            <th colspan="4" className="frez heading">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="name">All Stock by Sepling</div>
                <div
                  className="properties"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Total Stock</span>
                  <span>Total Distribute</span>
                  <span style={{backgroundColor: 'lightgreen'}}>Balance Stock</span>
                </div>
              </div>
            </th>
            {newArr.map((item) => {
              return (
                <td>
                  <div>{item.sum_sapling_inward}</div>
                  <div>{item.sum_sapling_outward}</div>
                  <div style={{backgroundColor: 'lightgreen'}}>{item.sapling_balance_stock}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="4" className="frez heading">
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="name">Dhawalgaon-Shinde Suresh Baban</div>
                <div
                  className="properties"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Total Stock</span>
                  <span>Total Distribute</span>
                  <span style={{backgroundColor: 'yellow'}}>Balance Stock</span>
                </div>
              </div>
            </th>
            {dhawalgaonArray.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div style={{backgroundColor: 'yellow'}}>{item.balance}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="4" className="frez heading">
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="name">Ambad-Govind Ashok kumar Lahoti</div>
                <div
                  className="properties"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Total Stock</span>
                  <span>Total Distribute</span>
                  <span style={{backgroundColor: 'yellow'}}>Balance Stock</span>
                </div>
              </div>
            </th>
            {ambadArray.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div style={{backgroundColor: 'yellow'}}>{item.balance}</div>
                </td>
              );
            })}
          </tr>
          <tr>
            <th colspan="4" className="frez heading">
            <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div className="name">Karjat-Navnath Ragunath Shinde</div>
                <div
                  className="properties"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Total Stock</span>
                  <span>Total Distribute</span>
                  <span style={{backgroundColor: 'yellow'}}>Balance Stock</span>
                </div>
              </div>
            </th>
            {karjatArray.map((item) => {
              return (
                <td>
                  <div>{item.inward}</div>
                  <div>{item.outward}</div>
                  <div style={{backgroundColor: 'yellow'}}>{item.balance}</div>
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default App;
