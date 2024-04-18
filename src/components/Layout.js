export default function Layout(children) {
  return `
    <div class="layout">
      <div class="layout__container">
        <div class="layout__main-content">
          ${ html(children) }
        </div>
      </div>
    </div>
  `;
}
