import React, { useState } from "react";

const SubnetCalculator = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [prefixOrMask, setPrefixOrMask] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("subnet");
  const [subnettingNetwork, setSubnettingNetwork] = useState("");
  const [newPrefix, setNewPrefix] = useState("");
  const [subnettingResult, setSubnettingResult] = useState(null);

  const calculateSubnet = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8000/calculate-subnet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ip: ipAddress,
          prefix_or_mask: prefixOrMask.includes(".")
            ? prefixOrMask
            : parseInt(prefixOrMask),
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setResult(data);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch {
      setError("Failed to connect to the server");
    }
  };

  const calculateSubnetting = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "http://localhost:8000/calculate-subnetting",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            network: subnettingNetwork,
            new_prefix: parseInt(newPrefix),
          }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSubnettingResult(data);
      } else {
        setError(data.error || "An error occurred");
      }
    } catch {
      setError("Failed to connect to the server");
    }
  };

  return (
    <div className="container">
      <h1>IP Subnet Calculator</h1>

      <div className="tabs">
        <button
          className={activeTab === "subnet" ? "active" : ""}
          onClick={() => setActiveTab("subnet")}
        >
          Subnet Calculator
        </button>
        <button
          className={activeTab === "subnetting" ? "active" : ""}
          onClick={() => setActiveTab("subnetting")}
        >
          Subnetting Calculator
        </button>
      </div>

      {activeTab === "subnet" ? (
        <div className="tab-content">
          <form onSubmit={calculateSubnet}>
            <div className="form-group">
              <label htmlFor="ipAddress">IP Address:</label>
              <input
                type="text"
                id="ipAddress"
                value={ipAddress}
                onChange={(e) => setIpAddress(e.target.value)}
                placeholder="e.g., 192.168.1.0 or 192.168.1.0/24"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="prefixOrMask">
                Prefix Length or Subnet Mask:
              </label>
              <input
                type="text"
                id="prefixOrMask"
                value={prefixOrMask}
                onChange={(e) => setPrefixOrMask(e.target.value)}
                placeholder="e.g., 24 or 255.255.255.0"
                required
              />
            </div>

            <button type="submit">Calculate</button>
          </form>

          {error && <div className="error">{error}</div>}

          {result && (
            <div className="results">
              <h2>Subnet Information</h2>
              <table>
                <tbody>
                  <tr>
                    <td>IP Address:</td>
                    <td>{result.ip_address}</td>
                  </tr>
                  <tr>
                    <td>Subnet Mask:</td>
                    <td>{result.subnet_mask}</td>
                  </tr>
                  <tr>
                    <td>Wildcard Mask:</td>
                    <td>{result.wildcard_mask}</td>
                  </tr>
                  <tr>
                    <td>Network Address:</td>
                    <td>{result.network_address}</td>
                  </tr>
                  <tr>
                    <td>Broadcast Address:</td>
                    <td>{result.broadcast_address}</td>
                  </tr>
                  <tr>
                    <td>First Host:</td>
                    <td>{result.first_host}</td>
                  </tr>
                  <tr>
                    <td>Last Host:</td>
                    <td>{result.last_host}</td>
                  </tr>
                  <tr>
                    <td>Total Hosts:</td>
                    <td>{result.total_hosts}</td>
                  </tr>
                  <tr>
                    <td>Usable Hosts:</td>
                    <td>{result.usable_hosts}</td>
                  </tr>
                  <tr>
                    <td>Prefix Length:</td>
                    <td>{result.prefix_length}</td>
                  </tr>
                  <tr>
                    <td>IP Version:</td>
                    <td>IPv{result.ip_version}</td>
                  </tr>
                  <tr>
                    <td>IP Class:</td>
                    <td>{result.ip_class}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="tab-content">
          <form onSubmit={calculateSubnetting}>
            <div className="form-group">
              <label htmlFor="subnettingNetwork">Network Address:</label>
              <input
                type="text"
                id="subnettingNetwork"
                value={subnettingNetwork}
                onChange={(e) => setSubnettingNetwork(e.target.value)}
                placeholder="e.g., 192.168.1.0/24"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="newPrefix">New Prefix Length:</label>
              <input
                type="number"
                id="newPrefix"
                value={newPrefix}
                onChange={(e) => setNewPrefix(e.target.value)}
                placeholder="e.g., 26"
                min="1"
                max="32"
                required
              />
            </div>

            <button type="submit">Calculate Subnetting</button>
          </form>

          {error && <div className="error">{error}</div>}

          {subnettingResult && (
            <div className="results">
              <h2>Subnetting Results</h2>
              <p>Original Network: {subnettingResult.original_network}</p>
              <p>New Prefix: /{subnettingResult.new_prefix}</p>
              <p>Number of Subnets: {subnettingResult.subnets_count}</p>

              <h3>Subnets:</h3>
              <div className="subnets-list">
                {subnettingResult.subnets.map((subnet, index) => (
                  <div key={index} className="subnet-item">
                    <p>
                      <strong>Subnet {index + 1}:</strong> {subnet.subnet}
                    </p>
                    <p>Network Address: {subnet.network_address}</p>
                    <p>Broadcast Address: {subnet.broadcast_address}</p>
                    <p>Usable Hosts: {subnet.usable_hosts}</p>
                    <p>Host Range: {subnet.range}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SubnetCalculator;
