const typePlans = document.querySelectorAll('.type-plans')

typePlans.forEach((el, i) => {
  el.addEventListener('click', function (e) {
    removeClass()
    console.log(e.target.parentElement.classList)
    if (
      e.target.parentElement.classList.contains('Plans') ||
      e.target.parentElement.classList.contains('type-plans') ||
      e.target.parentElement.classList.contains('container-plan') ||
      e.target.parentElement.classList.contains('header-plan')
    ) {
      this.classList.add('toggle-card')
    }
  })
})

function removeClass() {
  typePlans.forEach(e => e.classList.remove('toggle-card'))
}
