# react-Amazon-clone
react를 사용하여 만든 Amazon web site


## Firebase deploy
### Link to [View](https://clone-bc826.web.app/)

#
- FE: React
- BE: express, firebase-functions
- DB: firebase-fireStore
## 사용 npm 
- Payment: stripe-js

## Main Dir Structure
- functions
    - index.js 
- src
    - Checkout
    - Footer
    - Header
    - Home_Product
## Component
### HOME
![ezgif com-gif-maker](https://user-images.githubusercontent.com/45006553/113262855-0b18d700-930c-11eb-9e20-b87b26b338f5.gif)
### CHECKOUT
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/45006553/113263228-7b275d00-930c-11eb-8d66-0f117f269f19.gif)

### LOGIN, PAYMENT
Login > Home > Checkout > Payment > Orders   
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/45006553/113263651-ff79e000-930c-11eb-903a-aa1e4fbc29a2.gif)
### DB
fireStore db && Stripe payments
![ezgif com-gif-maker (3)](https://user-images.githubusercontent.com/45006553/113264060-7e6f1880-930d-11eb-98a7-2fefedd3cf27.gif)

### Full
![full_1](https://user-images.githubusercontent.com/45006553/113264927-811e3d80-930e-11eb-8e86-26cce66a48d6.gif)

![full_2](https://user-images.githubusercontent.com/45006553/113265002-9b581b80-930e-11eb-9127-346ec0be55b8.gif)
### ISSUE
#### 문제 
Login page에 Footer component를 추가했는데, 고정이 되지 않고 페이지를 줄이면 계속 따라올라옴

#### 해결
Footer.css 에서 
root가 되는 footer div에 position: absolute 로 하고  top 과 height에 픽셀을 주어 고정시켰다.

#
#### 문제 
로그인을 할 때 email과 pw 동시 인증에서 모바일 번호를 포함한 인증으로 변경하려고 기존 email, pw인증을 지우고 email or phonenumber 함수를 login page에서 새로 생성했지만 작동되지 않음. 그래서 기존으로 돌아감 
#### 해결 
작동되지 않았던 이유는 firebase의 인증 설정에서 email/pw만 사용해놨었음.. email/pw 외 전화, 구글, sns 등으로 인증을 할 수 있지만 여기서는 email/pw 로만 진행
# 

#### Scroll Back to Top 
Material-ui 의 button component를 사용하면 간단히 구현할 수 있었지만, react hooks 을 사용하여 하는 방법을 찾아봄.
#### 문제
Firebase DB에 데이터가 저장되지 않음   
Stripe Payments에서는 승인이 되어 지불이 되고 있는데, DB에는 저장되자 않는 문제가 발생   


```JS
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

#### 해결 
Firebase AIP를 보던 중 Cloud Firestroe 의 보안규칙에 있는 규칙 탭에서 읽고 쓰기를 true로 변경하니 data 가 저장이 됨   

```JS
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

####
개발 중간에 amazon web page가 리뉴얼이 되었다. 변경된 사이트의 ui를 최대한 반영해보려고 했지만, 아직 부족했다.

### Required Version