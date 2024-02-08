---
title: Flowershow 플러그인을 활용한 옵시디언 무료 퍼블리싱 방법
tistoryBlogName: anpigon
tistoryTitle: Obsidian에서 Flowershow 플러그인으로 무료로 퍼블리시하는 방법
tistoryTags: obsidian,publish
tistoryVisibility: "3"
tistoryCategory: "1022554"
tistorySkipModal: true
tistoryPostId: "448"
tistoryPostUrl: https://anpigon.tistory.com/448
date: 2024-01-27 10:38:34
tags: 옵시디언/플러그인
---

Flowershow 플러그인은 Obsidian 노트를 [Flowershow 템플릿](https://github.com/datopian/flowershow)을 사용하여 [Vercel](https://vercel.com/)을 통해 게시할 수 있게 해주는 도구입니다.

이 글은 [Flowershow 문서](https://flowershow.app/docs/publish-howto)를 참조하여 작성되었습니다.

## 초기 설정

#### 1. GitHub 계정이 없다면 [여기](https://github.com/signup)에서 생성하세요.

#### 2. Vercel 계정이 필요합니다. [여기](https://vercel.com/signup)에서 GitHub 계정으로 가입하세요.

#### 3. [Flowershow 저장소](https://github.com/datopian/flowershow)에 접속해 "Quick clone and deploy" 섹션의 "Deploy" 버튼을 클릭하세요.

![](https://i.imgur.com/geLvjXO.png)

이후 Vercel의 "Create Git Repository" 페이지가 열리며, 여기서 저장소 이름(Repository Name)을 입력한 후 "Create"를 클릭해 GitHub 계정에 템플릿 저장소를 복사하고 Vercel에 배포하세요.

![](https://i.imgur.com/VwIGodB.png)

#### 4. GitHub에서 개인 액세스 토큰을 생성합니다.

GitHub에 로그인한 상태에서 [새 개인 액세스 토큰 페이지](https://github.com/settings/tokens/new?scopes=repo)로 이동하세요. 토큰의 유효 기간을 "No expiration"으로 설정할 수 있습니다.

![액세스 토큰 생성](https://i.imgur.com/jZyoMvu.png)

"Generate token"을 클릭하고, 다음 페이지에서 표시된 액세스 토큰을 복사하세요.

![액세스 토큰 복사](https://i.imgur.com/t3uXDUe.png)

#### 5. Obsidian에서 [Flowershow 플러그인](https://obsidian.md/plugins?id=flowershow)을 설치하고 활성화한 후 설정을 엽니다.

GitHub 사용자 이름과 3단계에서 생성한 리포지토리 이름을 입력하세요. 그리고 4단계에서 복사한 액세스 토큰을 붙여넣으세요.

![](https://i.imgur.com/N1POhSu.png)

#### 6. 첫 노트를 게시해 보세요.

Obsidian에서 새 노트를 생성합니다.

#### 7. Windows/Linux에서는 `CTRL`+`P`, Mac에서는 `CMD`+`P`를 눌러 명령 팔레트를 열고 "Flowershow: Publish Single Note" 명령을 찾아 실행하세요.

#### 8. [Vercel](https://vercel.com/dashboard) 의 사이트 URL로 이동하세요.

아무 것도 보이지 않는다면 잠시 기다린 후 새로 고쳐 보세요. Visit 버튼을 클릭하면 방금 생성한 노트를 포함하는 Flowershow 사이트를 볼 수 있습니다.

![](https://i.imgur.com/7fq88t4.png)

Vercel에서 도메인을 변경하고 싶다면, Settings > Domains에 접속해 Edit 버튼을 클릭하여 수정하세요.

![](https://i.imgur.com/LqpYsOa.png)

## Flowershow 플러그인

### 플러그인 명령어

- `Flowershow: Publish Single Note`: 현재 노트를 Flowershow 사이트에 게시합니다.
- `Flowershow: Publish All Notes`: 볼트에 있는 모든 노트를 Flowershow 사이트에 게시합니다.

### 플러그인 리본 명령

플러그인 설치 후 Obsidian 리본에 새로운 🌱 아이콘이 추가됩니다. 이 아이콘을 클릭하면 다음 정보를 포함하는 출판 상태 패널이 표시됩니다.

- **Published**: Flowershow 사이트에 게시된 노트의 총 수
- **Changed**: 로컬에서 편집된 후 게시된(Published) 노트의 총 수 (+ 버튼을 눌러 게시)
- **Unpublished**: Obsidian 저장소에는 있으나 아직 사이트에 게시되지 않은 새 노트의 수 (+ 버튼을 눌러 게시)
- **Deleted**: Obsidian에서 삭제되었으나 사이트에 아직 게시된 노트의 수 (+ 버튼을 눌러 게시를 취소)

### 노트 Frontmatter 설정

- `isDraft`: 노트를 Flowershow 사이트에 게시하지 않으려면 `true`로 설정하세요. 이미 게시된 경우에는 게시를 취소합니다. (기본값은 `false`).

## 마치며

다음은 제가 Flowershow 플러그인을 사용하여 배포한 사이트입니다.
[digital-flora-show.vercel.app/](https://digital-flora-show.vercel.app/)

이 사이트는 Obsidian 노트를 활용하여 생성되었으며, Flowershow 템플릿과 Vercel을 통해 온라인으로 게시되었습니다. 여기서는 제가 작성한 다양한 노트를 공유하고 있습니다.

## 관련 글

- [Digital Garden 플러그인: 나만의 디지털 가든 만들기](https://anpigon.tistory.com/164)
- [DGitHub과 Netlify를 사용해서 블로그 만들기 (with Obsidian Digital Garden Plugin)](https://anpigon.tistory.com/167)
