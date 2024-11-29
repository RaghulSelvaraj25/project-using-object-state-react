import "./App.css";
import Feesmanagement from "./Feesmanagement";

function App() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "blue",
          fontWeight: "bold",
        }}
      >
        Credo Fees Management System
      </h1>
      <Feesmanagement />
    </div>
  );
}

export default App;
