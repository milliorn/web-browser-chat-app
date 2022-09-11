import "./App.css";

const style = {
  appContainer: `max-w-3xl	mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 shadow-xl border relative mt-10`,
};

function App() {
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}></section>
    </div>
  );
}

export default App;
