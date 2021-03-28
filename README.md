# nextjs-fe-admin-template

## dockerization

### build image

docker build -f Dockerfile -t nextjs-fe-admin-template .

### run image

docker run -p 80:80 nextjs-fe-admin-template

## stylization

<ul>
    <li>styled-components JS library</li>
    <li>@material-ui/core for Material-UI integration</li>
</ul>


## internationalization

<ul>
    <li>next-i18next JS library</li>
</ul>


## environment

<ul>
    <li>cross-env development (JS library for multiple environment setup.)</li>
</ul>


## state management

<ul>
    <li>react-redux JS library</li>
    <li>redux JS library</li>
    <li>next-redux-wrapper JS library</li>
    <li>redux-thunk</li>
    <li>redux-devtools-extension</li>
</ul>


## cookie management

<ul>
    <li>js-cookie JS library</li>
</ul>

## api call management

<ul>
    <li>axios JS library</li>
</ul>


## linting

<ul>
    <li>eslint-plugin-simple-import-sort JS library</li>
</ul>


to execute linting process run command

- npm run lint or yarn lint


## Testing

### Component Unit tests

<ul>
    <li>jest (JS library for unit tests)</li>
    <li>Enzyme (JS library for React's component tests)</li>
</ul>


to run all test run command

- npm run test or yarn test