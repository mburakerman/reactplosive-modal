# 🔥 Reactplosive Modal

> A simple React modal component with an explosion effect

<br />

![NPM](https://img.shields.io/npm/v/reactplosive-modal)
![NPM License](https://img.shields.io/npm/l/reactplosive-modal)

<br />

## ⏬ Install

```js
npm i reactplosive-modal
```

## 🪡 Usage

```js
import ReactplosiveModal from "reactplosive-modal";
```

```html
const YourComponent = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <ReactplosiveModal
      title={<h4>Title</h4>}
      isVisible={isModalVisible}
      onClose={() => setIsModalVisible(false)}
    >
      <p> Lorem ipsum dolor sit amet.</p>
      <button>I do nothing.</button>
    </ReactplosiveModal>
  );
};

```

## ⚙️ Props

```js
{
  title?: ReactNode,
  children: ReactNode,
  isVisible: boolean,
  width?: string, // default 500px
  onClose: (visibility: boolean) => void,
  outsideClickEnabled?: boolean, // default true
};
```

## ©️ License

Licensed under MIT
