import "./App.css";
import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-3xl	mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative mt-10`,
};

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
      </section>
    </div>
  );
}

export default App;
