---
title: "Quartz 블로그에 댓글 기능 추가하기: Giscus 사용 방법"
tags:
  - Quartz
date: 2024-01-30 02:09:56
---
Quartz 블로그에 댓글 기능을 추가하고 싶으신가요? [Giscus](https://giscus.app/ko)를 사용하면 Quartz 블로그에 쉽게 댓글 기능을 추가할 수 있습니다. Giscus는 GitHub Discussions를 기반으로 하는 무료 댓글 시스템으로, 별도의 DB 서버가 필요 없습니다.

> [!warning] 주의사항
> 본 가이드에서 설명하는 방법으로 Quartz 코드를 직접 수정할 경우, 새로운 버전의 Quartz가 출시되었을 때 [Quartz 버전 업그레이드](https://quartz.jzhao.xyz/upgrading)를 위한 `quartz update` 명령어가 정상적으로 작동하지 않을 수 있습니다. 이런 경우에는 Quartz GitHub 저장소에서 직접 업데이트를 다운로드하고, 로컬에서 변경된 사항을 수동으로 해결해야 할 수도 있습니다.

## Giscus 설치 준비
[Giscus 웹사이트](https://giscus.app/ko)를 방문하여 필요한 설정을 입력합니다. 여기서는 GitHub 레포지토리와 댓글을 매핑할 방법 등을 설정할 수 있습니다.

![](https://i.imgur.com/MCWkIAB.png)

설정을 모두 완료하면, Giscus에서 다음과 같은 코드가 생성됩니다.

![](https://i.imgur.com/inJLEke.png)

## 댓글 기능 설치 및 코드 수정

이제, 여러분의 블로그가 설치된 GitHub 저장소에 가서 새로운 파일을 만들고 코드를 추가해야 합니다.

[`components/Comments.tsx`](https://github.com/anpigon/quartz/blob/v4/quartz/components/Comments.tsx) 파일을 생성하고, 다음 스크립트 코드를 작성합니다. `<script>` 태그 안의 코드는 위에서 생성된 여러분의 Giscus 코드로 대체해야 합니다.
```ts
import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Comments() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="anpigon/quartz"
        data-repo-id="R_kgDOLKhz-Q"
        data-category="General"
        data-category-id="DIC_kwDOLKhz-c4CczBa"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="en"
        crossOrigin="anonymous"
        async
      ></script>
    )
  }

  return Comments
}) satisfies QuartzComponentConstructor
```

이제, 댓글 컴포넌트를 블로그의 다른 부분과 통합해야 합니다.

 [`components/index.ts`](https://github.com/anpigon/quartz/blob/eba1233d9b1f03a5e298bb6529f53d0af7113716/quartz/components/index.ts#L22) 파일에서 `import Comments`와 `export Comments`를 추가합니다.

![](https://i.imgur.com/wFNoAJW.png)

[`quartz.layout.ts`](https://github.com/anpigon/quartz/blob/84e5704c66ec3810080202dd1a8cf516a39ddc85/quartz.layout.ts#L23) 파일에서 `Component.Comments()`를 추가합니다.
![](https://i.imgur.com/AaXJ9LN.png)

마지막으로, [`components/Footer.tsx`](https://github.com/anpigon/quartz/blob/888b1e50ff494dc0070b256f62fbc42f3ecb65ca/quartz/components/Footer.tsx#L15-L16)파일에 `<div class="giscus"></div>`를 추가하여 댓글 시스템이 표시될 위치를 지정합니다.

![](https://i.imgur.com/r2lZAfu.png)

이 글을 따라하면, 블로그에 손쉽게 댓글 기능을 추가할 수 있습니다. Giscus를 통해 댓글 기능을 추가하는 과정은 간단하며, 개발자가 아니어도 쉽게 따라 할 수 있습니다.
