# express-typescript-starterkit

## 🧰 Setup project dependencies

Please open a terminal and run the following command:

```bash
yarn install
```

### 🔐 Generating SSL certificate for development

Please open a terminal and run the following command:

```bash
bash ./setup/ssl/generate.ssl.sh
```

## 🖥 Run the project

Please open a first terminal and run the following command:

```bash
yarn dev
```

Then, in another terminal please run the following command:

```bash
yarn watch
```

## 🎨 Lint the project

Please open a terminal and run the following command:

```bash
yarn lint
```

## ✉️ Postman

Sometimes maintining Postman collection up to date can become really painful...

This project comes with an automated script to generate all the Postman collection

The `postmanConfig` object located at `@/src/config/index.ts` must be kept up to date with your API in order to generate the config file correctly

Please open a terminal and run the following command:

```bash
yarn generate-postman-collection
```

You will see a `collection.json` file created at the root of the project.

You simply have to import it in the Postman application, and then you will be ready to test your API on Postman 🚀

## 📊 Roadmap

`TODO` :

- Add deployment
- Add tests with `Jest`
- Add `CD` with `Github Actions`
- Add complete `CI/CD` flow

## 🗒 Notes

- [Used to fix absolute paths imports](https://dev.to/dotorimook/using-absolute-path-import-with-typescript-babel-nodemon-in-your-node-project-ha7#comment-h6p0)

- [Used to fixed development config](https://stackoverflow.com/questions/62092769/ts-node-dev-doesnt-apply-changes-in-auto-reload)

- [Used to generate Postman collection automatically](https://siddharth-lakhara.medium.com/generate-postman-collections-using-node-js-68fcf425d823)

- [Used to fix local `gpg` keychain issue](https://stackoverflow.com/questions/39780452/prevent-gpg-password-prompt-on-mac)

- [Used to configure signed commits on `VSCode`](https://dev.to/devmount/signed-git-commits-in-vs-code-36do#:~:text=Set%20up%20VS%20Code,Enables%20commit%20signing%20with%20GPG%E2%80%9D.&text=And%20that%27s%20it!,integration%20and%20sign%20your%20work.)

- [Used to fix absolute imports without `module-aliases`](https://medium.com/@fmoessle/typescript-paths-with-ts-node-ts-node-dev-and-jest-671deacf6428)