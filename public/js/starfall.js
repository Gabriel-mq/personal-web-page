const d = document

export default function StarFall(starFallContainer) {
  const $starFallContainer = d.querySelector(starFallContainer)
  let intervalStarFall
  let firstLoad = false

  if (!firstLoad) {
    intervalStarFallFunc()
    firstLoad = true
  }

  d.addEventListener('visibilitychange', () => {
    if (intervalStarFall) clearInterval(intervalStarFall)
    if (d.visibilityState === 'visible') {
      intervalStarFallFunc()
    }
  })

  function intervalStarFallFunc() {
    intervalStarFall = setInterval(() => {
      const $starFall = d.createElement('div')
      $starFall.classList.add('sfall')
      $starFall.classList.add('sfallAnim')
      $starFall.style.top = ((Math.random() - 0.2) * 300).toString() + '%'
      $starFall.style.height = (Math.random() * 4).toString() + 'px'
      $starFallContainer.appendChild($starFall)

      setTimeout(() => {
        $starFall.remove()
      }, 5000)
    }, 3000)
  }
}
