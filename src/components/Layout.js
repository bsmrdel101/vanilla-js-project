export default function Layout(children) {
  return `
    <div class="layout">
      <div className="layout__container">
        <div className="layout__main-content">
          ${ html(children) }
        </div>
      </div>
    </div>
  `;
}
