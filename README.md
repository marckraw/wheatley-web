## ENVs
To run the project you have to set up `.env` file with envs (proper values you should know, or ask @marckraw): 
```
GOOGLE_CLIENT_ID=asdf
GOOGLE_CLIENT_SECRET=asdf
CREDENTIALS_LOGIN_ENDPOINT=http://localhost:8080/api/public/login
GOOGLE_LOGIN_ENDPOINT=http://localhost:8080/api/public/login/google
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_API_URL=http://localhost:8080/ - for dev
```

## Getting Started

After clone, install deps:

```bash
yarn
```

Run the NextJS development server (will clean all cache):

```bash
yarn clean:run:dev
```

To run it, without cleaning cache: 
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

If u want to build static production version, run
```bash
yarn serve:export:production
```

If u want to analyze what was bundled to final prod pacakge run:
```bash
yarn serve:export:production:analyze
```

## Storybook
We have also, Storybook, which is nice way to document react or other frameworks components, to run develop Storybook, run
```bash
yarn storybook
```

It will be available for you on `localhost:6006`

Production version of components documentation is also available online at: https://bystro-design-system.netlify.app (master branch)


## Deployed stuff, useful links
|                           | url                                                                       | pass           |
|---------------------------|---------------------------------------------------------------------------|----------------|
| App                       | https://bystro.ch                                                         | bystrodokuchni |
| Design system             | https://design-system.bystro.ch/                                          | bystrodokuchni |
| Figma wireframes / design | https://www.figma.com/file/ARChDbmUk68Q7Bqy10hSZD/Main-View?node-id=0%3A1   |                |


# Tests
[About testing with NextJS](https://nextjs.org/docs/testing)
 
Writing tests with Cypress
- [Writing tests with Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file)
- [smashing magazine about cypress](https://www.smashingmagazine.com/2021/09/cypress-end-to-end-testing/)

Writing unit / snapshot tests with Jest
- [Writing unit tests with Jest](https://jestjs.io/docs/cli#reference)

# What to do after EVERY deps update
1. yarn test:ci
2. yarn cypress (not ready yet)
3. yarn storybook
4. yarn storybook prod
5. netlify cli run prod app