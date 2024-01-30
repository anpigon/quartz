import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

function MenuButton({ displayClass }: QuartzComponentProps) {
  return (
    <button title="menu button" class={displayClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="svg-icon lucide-menu"
      >
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
    </button>
  )
}

MenuButton.css = `
button {
 background: none;
 border: none;
 cursor: pointer;
 padding: 0;
 margin: 0;
 outline: none;
 color: inherit;
 margin-right: 6px;
}
button:hover {
 color: var(--tertiary);
}
`

export default (() => MenuButton) satisfies QuartzComponentConstructor
