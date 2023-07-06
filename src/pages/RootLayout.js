import { Outlet } from "react-router-dom";

// Components
import Navbar from "../components/Navbar";

function App() {
    return (
        <div >
            <Navbar />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </div>

    );
}

export default App;