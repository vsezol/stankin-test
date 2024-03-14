# Stankin Test Helper

## Как использовать?

1. Устанавливаете расширение [User JavaScript and CSS](https://chromewebstore.google.com/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld)

2. Заходите на https://edu.stankin.ru

3. Выбираете расширение из списка
   ![image](./assets/manual-1.png)

4. Нажимаете добавить (Аdd new)
   ![image](./assets/manual-2.png)

5. Вставляете код (ищите его чуть ниже)
   ![image](./assets/manual-3.png)

6. Жмете сохранить (Ctrl + S) или кнопку

7. **Вы закончили настройку! Переходите обратно на сайт!**

## Код для вставки

JS код (левое окно)

```js
// Вы можете использовать другую ссылку на файл или сайт
const REMOTE_URL = "https://vsezol.com/polyakov-test/test.pdf";

window.addEventListener("load", () => {
  const iframe = document.createElement("iframe");
  iframe.src = REMOTE_URL;
  iframe.classList.add("hidden-iframe");

  document.body.append(iframe);
});
```

CSS код (правое окно)

```css
.hidden-iframe {
  position: fixed;
  /* Вы можете изменить положение окна */
  bottom: 5px;
  left: 10px;
  /* Вы можете изменить размер окна */
  width: 600px;
  height: 200px;
  z-index: 20000;
  opacity: 0;
}

.hidden-iframe:hover {
  opacity: 1;
}
```
