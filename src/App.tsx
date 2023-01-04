import "./app.scss";
import { useState } from "react";
import ReactplosiveModal from "./components/ReactplosiveModal";
import GithubCorner from "react-github-corner";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="container">
        <GithubCorner
          bannerColor={"#bd93f9"}
          size={60}
          href="https://github.com/mburakerman/reactplosive-modal"
        />
        <header>
          <h1>🔥 Reactplosive Modal 🔥</h1>
          <p>A simple React modal component with an explosion effect</p>
        </header>

        <section>
          <h2>🪡 Demo</h2>
          <button
            className="show-modal-button"
            onClick={() => setIsModalVisible(!isModalVisible)}
          >
            Show Modal
          </button>
        </section>

        <section>
          <h2>⏬ Install</h2>
          <pre>
            <code>npm i reactplosive-modal</code>
          </pre>
        </section>

        <section>
          <h2>🐙 More</h2>
          <p>
            You can also customize the markup as you wish. <br /> Go{" "}
            <a
              href="https://github.com/mburakerman/reactplosive-modal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github page
            </a>{" "}
            to see more details.
          </p>
        </section>
      </div>

      <ReactplosiveModal
        title={<h4>🔥 Boo</h4>}
        isVisible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet a
          tenetur delectus reprehenderit, omnis doloremque at earum officia unde
          sequi accusantium corporis praesentium deserunt laboriosam dignissimos
          voluptatum culpa molestiae ullam.
        </p>
        <br />
        <button className="button">I do nothing.</button>
      </ReactplosiveModal>
    </div>
  );
}

export default App;
