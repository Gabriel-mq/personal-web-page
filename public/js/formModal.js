const d = document

export default function formModal(modal, modalClose) {
  const $modal = d.querySelector(modal)

  d.addEventListener('click', (e) => {
    if (e.target.matches(modal) || e.target.matches(modalClose)) {
      $modal.style.display = 'none'
    }
  })
}
