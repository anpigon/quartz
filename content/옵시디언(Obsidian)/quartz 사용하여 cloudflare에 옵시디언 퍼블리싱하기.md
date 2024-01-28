---
tistoryBlogName: anpigon
tistoryTitle: GitHub와 Cloudflare를 이용하여 Obsidian 노트를 온라인에 게시하는 방법 (with Quartz)
tistoryVisibility: "3"
tistoryCategory: "1022554"
tistorySkipModal: true
tistoryPostId: "449"
tistoryPostUrl: https://anpigon.tistory.com/449
---

## 준비하기
1. GitHub 계정이 필요합니다. GitHub 계정이 없다면 [여기](https://github.com/signup)에서 계정을 생성할 수 있습니다.
2. Cloudflare 계정 또한 필요합니다. Cloudflare 계정이 없다면 [여기](https://dash.cloudflare.com/sign-up) 에서 계정을 생성할 수 있습니다.

## GitHub에서 새로운 Quartz 저장소 생성하기

GitHub의 [Quartz](https://github.com/jackyzha0/quartz) 페이지에 방문합니다. 그리고 'Use this template' 버튼을 클릭한 다음, 'Create a new repository'를 선택합니다.

![](https://i.imgur.com/CAm8vQT.png)

이어서 'Repository Name'을 입력하고 'Create Repository' 버튼을 클릭하여 새로운 저장소를 생성합니다.

## Cloudflare에 GitHub 연결하기
[Cloudflare 대시보드](https://dash.cloudflare.com/) 에 접속해 'Workers 및 Pages로 응용 프로그램을 빌드' 링크를 클릭합니다.

![](https://i.imgur.com/APujAJm.png)


다음 화면에서 'Pages' 탭을 선택하고, 이전에 GitHub에서 생성한 저장소를 연결합니다.

![](https://i.imgur.com/QHFNQfT.png)

프로젝트 이름을 입력하고 (입력한 이름이 도메인명이 됩니다), 프러덕션 브랜치를 확인합니다.
![](https://i.imgur.com/ZoiV2Pm.png)

빌드 설정에서 '프레임워크 미리 설정'을 '없음'으로 설정하고, '빌드 명령'에는 `npx quartz build`를 입력합니다. 그리고 '빌드 출력 디렉토리'에는 `public`를 입력합니다.

![](https://i.imgur.com/Bp14LkG.png)


## 옵시디언 노트를 웹에 게시하기
Flowershow 플러그인을 사용하여 Obsidian 노트를 게시할 수 있습니다. Flowershow 플러그인 사용 방법은 "[[Obsidian에서 Flowershow 플러그인으로 무료로 퍼블리시하는 방법]]" 글을 참고하세요.


## 마치며

다음은 Quartz와 Flowershow 플러그인을 이용해 만든 제 사이트입니다: [anpigon.pages.dev](https://anpigon.pages.dev/)

위 사이트는 Obsidian 노트를 기반으로 만들어졌으며, Quartz 템플릿과 Flowershow 플러그인을 활용해 Cloudflare를 통해 온라인에 게시되었습니다. 여기에는 앞으로 제가 작성한 노트를 공유할 예정입니다.
