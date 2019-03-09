Since most of my work is protected under disclosure agreements, I decided to publish a demo React App.

It displays the current month. Events can be added clicking on each day cell.

You can delete the event or edit its title. 

[Visit the Live Demo](https://react-kalender.herokuapp.com/)

See the [Components Documentation](./COMPONENTS.md) generated using [react-doc-creator](https://github.com/crearlink/react-doc-creator).

### Libraries used
+ React
+ React Redux
+ Material UI

## Install on local environment

```bash
git clone https://github.com/crearlink/react-calendar-demo.git
cd react-calendar-demo
npm i
```

## Start

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Run Tests

`npm t`

## Run Linter

The project has its [own custom ESLint Rules](./.eslintrc.js) inspired on the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript).

`npm run lint`

### Improvements

+ Event title should be mandatory
