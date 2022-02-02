const d = document

export default function nav_bar(hamburger, header, navBar) {
  const $header = d.getElementById(header),
    $hamburger = d.querySelector(hamburger),
    $navBar = d.querySelector(navBar)

  d.addEventListener('click', (e) => {
    if (e.target.matches(hamburger) || e.target.matches(`${hamburger} *`)) {
      if ($header.hasAttribute('class') === false) {
        $header.classList.add('hamburger__retract')
        $hamburger.classList.toggle('is-active')
        $navBar.classList.toggle('header__container-opacity')
      } else {
        $header.classList.toggle('hamburger__retract')
        $hamburger.classList.toggle('is-active')
        $navBar.classList.toggle('header__container-opacity')
      }
    }
  })
}
