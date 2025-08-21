import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [stats, setStats] = useState<{
    cpuModel?: string;
    cpuUsage?: number;
    ramUsage?: number;
    storageUsage?: number;
  }>({});

  useEffect(() => {
    // @ts-ignore
    window.electron.subscribeStatistics((stats) => {
      console.log(stats);
      setStats(stats);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Resource Manager</h1>

      <p>cpuUsage: {JSON.stringify(stats.cpuUsage)}</p>
      <p>ramUsage: {JSON.stringify(stats.ramUsage)}</p>
      <p>storageUsage: {JSON.stringify(stats.storageUsage)}</p>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
