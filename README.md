# express-typescript-starterkit

## 🧰 Setup project dependencies

Please open a terminal and run the following command:

```bash
yarn install
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

- [Used to generate Postman connection automatically](https://siddharth-lakhara.medium.com/generate-postman-collections-using-node-js-68fcf425d823)
