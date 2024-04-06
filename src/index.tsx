import ReactDOM from "react-dom/client";
import Context from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./server";

// Conditionally enable mocking
async function enableMocking() {
	if (process.env.NODE_ENV !== "development") return;
	return worker.start();
}

enableMocking().then(() => {
	const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
	root.render(<Context />);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
