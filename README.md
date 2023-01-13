# ✨ 예뻐지는 어플, Beauty CORE 💄

<br/>
<div align="center">
<img src="https://i.imgur.com/87n8mHs.png" width=600/>
<br/>
<br/>
 <img src="https://img.shields.io/badge/Typescript-v4-3178c6?logo=typescript"/>
  <img src="https://img.shields.io/badge/React-v18-61dafb?logo=React"/>
 <img src="https://img.shields.io/badge/Next.js-v12-000000?logo=Next.js"/>
 <br />
 <img src="https://img.shields.io/badge/Axios-v0.26-671CDE"/>
  <img src="https://img.shields.io/badge/ReactQuery-v4-FF4154?logo=ReactQuery"/>
  <img src="https://img.shields.io/badge/Redux Toolkit-v1.3-764ABC?logo=Redux"/>
  <br />
  <img src="https://img.shields.io/badge/Chakra UI-v3.2-319795?logo=Chakra UI"/>
  <img src="https://img.shields.io/badge/React Hook Form-v7.2-EC5990?logo=ReactHookForm"/>
  <img src="https://img.shields.io/badge/Yarn-v1.22.17-2C8EBB?logo=Yarn"/>
  <br/>
  <br/>
</div>

## 📌 프로젝트 소개

> **_fast beauty web app_**

✔️ kakao로그인으로 간편한 회원가입과 toss pay로 빠르게 구입 가능할 뿐만 아니라 화장품 정보와 리뷰를 빠르게 확인하고, 구입 시 배송과 구입 현황을 실시간으로 확인할 수 있는 화장품 웹 애플리케이션 서비스 입니다.

✔️ 똑똑한개발자에서 진행하는 프로젝트의 스타터 프로젝트 next-init 2.0입니다. 프론트 개발만을 담당하여 진행 했으며, 현직 백앤드 개발자와 슬릭으로 소통하여 개발 진행 했습니다.

<br><br><br>

## 🎥 데모 영상
<br/><br/>
<div align="center">
<a href="https://youtu.be/v0hGzzNT_BM" target="_blank">
  <img src="https://i.imgur.com/FJU6mli.png" width="600">
</a>
</div>
<br><br><br>

# 🚀 Quick Start

<i>현재 서버가 비활성된 상태로 해당 프로젝트는 실행할 수 없습니다.</i>
<br/>
<a href="https://fastcampas-1-commerce-fe-lake.vercel.app/"><del>Beauty CORE</del></a> 보러가기!

<!-- [**자세히**]() -->

```
$ git clone https://github.com/zooyaho/fastcampas-1-commerce-fe.git
$ yarn install
$ yarn dev or yarn start
```

✔️ 환경변수 설정

```
NEXT_PUBLIC_API_BASE_URL=https://api.commerce.incourse.run/v1/

NEXT_PUBLIC_KAKAO_REST_API_KEY=[Kakao Client REST API Key]
NEXT_PUBLIC_KAKAO_REDIRECT_URI=http://localhost:3000/social_login/callback

NEXT_PUBLIC_TOSSPAYMENT_CLIENT_KEY=[Toss Test Client Key]
NEXT_PUBLIC_TOSSPAYMENT_SUCCESS_URL=http://localhost:3000/tosspayment/success
NEXT_PUBLIC_TOSSPAYMENT_FAIL_URL=http://localhost:3000/tosspayment/fail
```

<br><br><br>

# 📄 프로젝트 설명

- 프로젝트 Duration : 22.09.19 ~
- 프로젝트 팀원 : 박지우(FE)
- 프로젝트 Figma : Figma [**link**](https://www.figma.com/file/0AiQrpaJevxhXGo4iu2F0i/💳-커머스-트랙?node-id=4802%3A20827)

<br>

<!-- 노션 링크 필요 -->

> 프로젝트의 자세한 설명은 [**여기**]()로!

<br>

🔀 **User Flow** [**자세히**](https://i.imgur.com/1kk8Pgv.jpg) 보기!
<br><br>

🔖 **기능 명세서** [**자세히**](https://toktokhan.notion.site/7102dc90f3594caea5ed7e17f29e18ec) 보기!
<br><br>

### 📁 폴더 구조

    ├── public                  # 폰트, 이미지 등 정적파일 폴더
    ├── src
        ├── apis                # api 관련 함수 폴더
        ├── components          # 비즈니스 로직이 담긴 폴더
        ├── constants           # 상수 폴더
        ├── contexts            # provider정의 폴더
        ├── features            # RTK 관련 폴더
        ├── generated           # gen 명령어를 이용해 생성된 파일 모음 폴더
        ├── pages               # 페이지 뷰 컴포넌트 폴더
        ├── scripts             # 명령어 모음 폴더
        ├── styles              # CSS, Chakra-ui 모음 폴더
        ├── utils               # 유용한 함수 모음
    ├── README.md
    └── ...

📂 **폴더 구조** [**자세히**](https://toktokhan.notion.site/c459c92f21114659b31d273f42a935e9) 보기!

<!-- ### Pages

각 페이지는 파일 이름을 기준으로 경로와 연결됩니다.

Each page is associated with a route based on its file name.

    .
    ├── ...
    ├── pages               #
    │   ├── apis            # API endpoint
    │   ├── _app.tsx        # App component to initialize pages
    │   ├── _document.tsx   # Custom document to augment application's <html> and <body> tags
    │   └── ...
    └── ...

### Public

Next.js는 루트 디렉터리에 있는 public이라는 폴더에서 이미지와 같은 정적 파일을 제공합니다.

Next.js can serve static files, like images, under a folder called public in the root directory.

    .
    ├── ...
    ├── public              #
    │   ├── favicons        #
    │   └── ...
    └── ...

### styles

CSS, Chakra-ui 테마 구성 파일이 이 폴더에 배치됩니다.

Css, Chakra-ui theme configuration files are placed into this folder.

    .
    ├── ...
    ├── styles
    │   ├── theme
    │       └── index.ts
    │       └── styles.ts
    │       └── textStyles.ts
    └── ...

### apis

API 호출 관련 기능입니다.

Api call related functions.

    .
    ├── apis
    │   ├── _axios
    │       └── instance.ts
    │       └── useCustomInstance.ts
    │   ├── auth
    │   ├── example
    │   ├── theme
    └── ...

### Components

구성 요소는 독립적이고 재사용 가능한 코드 조각입니다.

Components are independent and reusable bits of code.

    .
    ├── ...
    ├── components
    │ ├── common
    │   ├── @Icons
    │   ├── @Layout
    │   ├── Select
    │   ├── Calendar
    │   └── ...
    │ ├── elements
    │ ├── hooks
    └── ...

### Hooks

사용자 지정 후크를 사용하면 일부 구성 요소 논리를 사용으로 시작하는 재사용 가능한 함수로 추출할 수 있으며, 해당 호출은 다른 후크를 사용할 수 있습니다.

Custom hook allows you to extract some components logic into a reusable function that starts with use and that call can other hooks.

      .
    ├── ...
    ├── components
    │ ├── common
    │ ├── elements
    │ ├── hooks
    │   ├── useSize.ts
    └── ...

### Utils

응용프로그램 전체에서 사용할 수 있는 작은 스니펫입니다. 응용 프로그램 전체에서 사용되는 짧고 구체적인 함수 및 상수.

Small snippets you can use throughout the application. Short and specific functions and constants used throughout application.

### Generated

Generated files such as apis, components, ...

    .
    ├── ...
    ├── generated         # If you run generate-script, it will be created
    │ ├── apis            # by swagger-typescript-api
    │ ├── mock            # by orval
    └── ...

- **generate apis**

1. set config about gen_api on your .env
2. script

   > ```
   > npm(or yarn) run gen:api
   > ```

3. usage mock data

   > ```
   > mock-data-path: /generated/mock/[filename].msw
   > mock-data: Use Function "~Mock"
   > network-mocking: Use function "~MSW" and set on "_App.ts"
   > ```

   mock-data by [orval](https://orval.dev/reference/configuration/overview), [faker](https://github.com/faker-js/faker), [msw](https://mswjs.io/docs/getting-started/mocks/rest-api)
   api-data by [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api) -->

<!-- ### Scripts

there is useful scripts in [package.json](package.json)

- **yarn run gen:api**
  - swagger => axios-api, react-hook, mock-data
- **yarn run gen:icon**
  - svg => chakra-icon

see more [README.md](/src/scripts/README.md) -->

<!-- # 📛 Naming

### 👨‍🦳 React Component

- **Extensions:** Use .tsx extension for React components.

- **Filename:** Use PascalCase for filenames. E.g., ReservationCard.tsx.

- **Reference Naming:** Use PascalCase for React components and camelCase for their instances.

  ```tsx
  // bad
  import reservationCard from './ReservationCard';




  /
  import ReservationCard from './ReservationCard';

  const ReservationItem = <ReservationCard />;



  /
  const reservationItem = <ReservationCard />;
  ```

- **Component Naming:** Use the filename as the component name. For example, ReservationCard.tsx should have a reference name of ReservationCard. However, for root components of a directory, use index.tsx as the filename and use the directory name as the component name:

  ````tsx
  // bad
  import Footer from './Footer/Footer';

  // bad
  import Footer from './Footer/index';

  // good
  import Footer from './Footer';
  ```# ⭐️ Stack

  ````

# Reference

- [Airbnb React/JSX Style Guide - Naming](https://github.com/airbnb/javascript/tree/master/react#naming)
- [JavaScript Naming Conventions](https://www.robinwieruch.de/javascript-naming-conventions)
- [리액트 어플리케이션의 상태 관리하기](https://www.kenrhee.com/blog/react-application-state-management) -->
