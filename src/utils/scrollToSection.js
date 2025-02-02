
export const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      // Ajustamos el scroll para compensar la altura del header
      const headerHeight = document.querySelector('header').offsetHeight
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }