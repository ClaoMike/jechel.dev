# [jechel.dev](https://jechel.dev/)

***

## Tech Stack 
|  Tech         | Details (external libraries, etc.)                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| HTML          |                                                                                                                                     |
| CSS           |                                                                                                                                     |
| JavaScript    | JSX                                                                                                                                 |
| React         | server: vite; libraries: ChakraUI, react-switch, react-router-dom, react-device-detect, react-icons/fa, redux, redux toolkit, axios |
| git           | GitHub, GitHub Pages                                                                                                                |
| Ruby          |                                                                                                                                     |
| Ruby on Rails | --api                                                                                                                               |
| PostgreSQL    |                                                                                                                                     |

***

## Commands

- Install dependencies
```console
npm install
```
- Start development server
```console
npm run dev
```

- Start the rails server
```console
rails server
```

***

## To Do
### Sprint 1
- ~~Migrate to ```vite```~~
- ```Loading``` component
- ```Error``` component
- ```Current Version``` section on the bottom with ```automatic update```
- Add detailed description about this project in the ```README``` file

### Sprint 2
- ```Moto``` section
    - Get ```YT Videos``` details to ```backend``` by calling an ```API```
    - Create API to call from the frontend
    - Integrate ```axios``` for ```API calls```
    - Display YT data on frontend

### Sprint 3
- ```Latest``` section
    - Compute the latest item and display it (moto for now)

### Sprint 4
- ```Admin``` page
    - ~~Login page~~
    - login setup (back end)
    - Edit ```About Me``` page
- ```About Me``` section (user)

### Sprint 5
- Cookies

### Sprint 6
- Dockerize
- Upload the browser's icon
- Host server on Heroku

### Next (to be divided into Sprints)
- Add the highschool education
- Under maintenance
- Contact form
- Subscribe to my email
- Websites
- Mobile apps
- Video games



## Issues
- [Color Mode Flash Issue](https://v2.chakra-ui.com/docs/styled-system/color-mode)
    - In some cases, when switching to dark mode and refreshing the page, the user might experience a quick flash of light mode before it switches correctly. This is a known issue and the ChakraUI team is looking to fix it.
***