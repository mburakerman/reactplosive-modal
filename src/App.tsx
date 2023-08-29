import "./app.scss";
import { useState } from "react";
import ReactplosiveModal from "./components/ReactplosiveModal";
import GithubCorner from "react-github-corner";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="container">
        <AnimatedCursor
          showSystemCursor={true}
          children={<img width="25" src={"fire.gif"} />}
          color="189, 147, 249"
        />
        <GithubCorner
          bannerColor={"rgba(189, 147, 249, 0.25)"}
          size={60}
          href="https://github.com/mburakerman/reactplosive-modal"
          target="_blank"
        />

        <header>
          <h1>Reactplosive Modal</h1>
          <p>A simple React modal component with an explosion effect</p>
        </header>

        <button
          className="show-modal-button"
          onClick={() => setIsModalVisible(!isModalVisible)}
        >
          ✨ Show Modal ✨
        </button>
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
