# [jechel.dev](https://jechel.dev/)

***

## Tech Stack 
|  Tech         | Details (external libraries, etc.)                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| HTML          |                                                                                                                         |
| CSS           |                                                                                                                         |
| JavaScript    |                                                                                                                         |
| React         | react-router-dom, react-device-detect, react-icons, Material UI, Joy UI, Material Icons, react-responsive, redux, axios |
| git           | GitHub, GitHub Pages                                                                                                    |
| Ruby          |                                                                                                                         |
| Ruby on Rails | --api                                                                                                                   |
| PostgreSQL    |                                                                                                                         |

***

## Commands
- Install rimraf (REQUIRED for generating the production build)
```console
npm install rimraf --save-dev
```
- Install all nodes
```console
npm install
```
- Start development server
```console
npm start
```
- Obtain the production build
```console
npm run build
```

- Start the rails server
```console
rails server
```

***

## To Do
### ~~Sprint 1~~
- ~~Add some kind of ```Press me icon``` on the ```YouTube episodes``` in the ```moto section```~~
- ~~Center everything in ```About Me``` section~~
- ~~Refactor the ```YouYube``` item~~
- ~~Complete the ```About Me``` section~~
- ~~Style everything -> Decide on some external library (such as ```Material-UI```)~~
- ~~Update skills' pie chart sizes for mobile~~
- ~~Fix bugs~~
- ~~New resume~~
- ~~Add version section on the bottom~~
- ~~Imports refactoring~~
- ~~CSS file for each component~~
- ~~Mock data~~
- ~~Strings file~~

### ~~Sprint 2~~
- ~~```Database``` schema~~
- ~~Normalization~~
- ~~```PostgreSQL``` db~~

### Sprint 3
- ~~Setup ```API```~~
- Add sensitive variables in an ```.env``` file
- ~~Connect with the ```db```~~
- ~~Connect with the frontend~~
- ~~Integrate ```axios``` and ```redux``` for ```API calls``` and ```state management```~~
- ~~Get and display the skills~~
- ~~Improve the ```About Me``` page~~

### Sprint 4
- Migrate to ```vite```

### Sprint 5
- Login page
- login setup (back end)
- Edit data page
- Edit skills

### Sprint 6
- Dockerize
- Upload the browser's icon
- Host server on Heroku

***
- Integrate the YouTube API

***
- Add the highschool education
- Under maintenance
- Contact form
- Subscribe to my email
- Websites
- Mobile apps
- Video games

### Sprint 7
- Automatic version update

### Sprint 8
- Cookies

### Sprint 9
- Add animations -> -> Decide on some external library (such as ```react-spring``` or ```anime.js```)
- Automate as much as possible
    - ~~When obtaining the production build, auto-copy it to the ```docs``` folder~~
    - ~~Absolute imports~~


## Issues
- [Color Mode Flash Issue](https://v2.chakra-ui.com/docs/styled-system/color-mode)
    - In some cases, when switching to dark mode and refreshing the page, the user might experience a quick flash of light mode before it switches correctly. This is a known issue and the ChakraUI team is looking to fix it.
***