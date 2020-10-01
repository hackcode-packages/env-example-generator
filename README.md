# env example generator

<p align="center">
<img src="https://user-images.githubusercontent.com/14032427/94772802-0e242080-03d8-11eb-9e7e-f982372886bc.png" width="400">
</p>

---

Ever wanted to try out someone's project and kept figuring out all the environment variables that were needed ? Or you are just too lazy to document the same in your own project ? Worry not !

This is a simple npm package that will read through the entire codebase (don't worry, only javascript and typescript files) of your project, and create a `.env.example` file with all the environment configurations that are used in the code.

---

## Usage

```bash
# install the package using
sudo npm i -g @hackcode/env-example-generator

# run the cli from the project root
generate-env

# An .env.example file would be created
```
