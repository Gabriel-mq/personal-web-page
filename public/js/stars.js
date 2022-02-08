const d = document,
  w = window,
  ua = navigator.userAgent

export default function Stars() {
  let starsQuantityMin = 150,
    starsQuantityMid = 250,
    starsQuantityMax = 500,
    /* starsSizeMin = 1,
    starsSizeMax = 3, */
    starsGrowthMin = 2,
    starsGrowthMax = 5

  const $starsContainer = d.getElementsByTagName('body'),
    $stars = d.getElementsByClassName('star')

  const $screenWidth = $starsContainer[0].scrollWidth,
    $screenHeight = $starsContainer[0].scrollHeight

  const randomGrowth = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  }

  /* const randomSize = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
  } */

  let xAxis, yAxis

  let $starsFragment
  let fragmentValidation = false

  function screenAxis() {
    if (fragmentValidation === false) {
      $starsFragment = d.createDocumentFragment()
      fragmentValidation = true
    }

    xAxis = Math.floor(Math.random() * $screenWidth)
    yAxis = Math.floor(Math.random() * $screenHeight)

    const star = document.createElement('div')
    star.classList.add('star')
    star.classList.add('starProps')
    star.style.top = yAxis.toString() + 'px'
    star.style.left = xAxis.toString() + 'px'
    $starsFragment.appendChild(star)
  }

  if (w.innerWidth >= 800) {
    for (let i = 0; i < starsQuantityMax; i++) {
      screenAxis()
      i === starsQuantityMax - 1
        ? $starsContainer[0].appendChild($starsFragment)
        : null
    }
  }

  if (w.innerWidth >= 400 && w.innerWidth < 800) {
    for (let i = 0; i < starsQuantityMid; i++) {
      screenAxis()
      i === starsQuantityMid - 1
        ? $starsContainer[0].appendChild($starsFragment)
        : null
    }
  }

  if (w.innerWidth < 400) {
    for (let i = 0; i < starsQuantityMin; i++) {
      screenAxis()
      i === starsQuantityMin - 1
        ? $starsContainer[0].appendChild($starsFragment)
        : null
    }
  }

  for (let i = 0; i < $stars.length; i++) {
    let randNum = randomGrowth(starsGrowthMin, starsGrowthMax)
    $stars[i].style.animationDuration = randNum + 's'
  }

  let starsSpamPreventer = false

  function recreateStars() {
    fragmentValidation = false
    $starsFragment = null

    let totalStars = $stars
    if (totalStars.length === 0) {
      Stars()
    } else {
      const removeStars = (totalStars) => {
        totalStars.forEach((star) => star.remove())
      }
      removeStars(d.querySelectorAll('.star'))
      Stars()
    }

    return (starsSpamPreventer = false)
  }

  function resizeEnd(func) {
    let resTimer
    return function (e) {
      if (resTimer) clearTimeout(resTimer)
      resTimer = setTimeout(func, 500, e)
    }
  }

  function resizeStars() {
    if (starsSpamPreventer != true) {
      if(ua.match(/android/i) || ua.match(/iphone|ipad|ipod/i)) return null
      else recreateStars()
      starsSpamPreventer = true
    }
  }

  w.addEventListener('resize', resizeEnd(resizeStars))
}
