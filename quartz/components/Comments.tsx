import { QuartzComponentConstructor } from "./types"

export default (() => {
  function Comments() {
    return (
      <script
        src="https://giscus.app/client.js"
        data-repo="anpigon/anpigon-quartz"
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
