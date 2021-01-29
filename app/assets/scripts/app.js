class ActiveNav{
    constructor() {
        this.sections = document.querySelectorAll('section')
        this.bubble = document.querySelector('.bubble')
        this.gradients = [
                            'linear-gradient(to left, #f46b45, #eea849)',
                            'linear-gradient(to left, #d1913c, #ffd194)',
                            'linear-gradient(to left, #2c3e50, #3498db)'
        ]
        this.options = {
            threshold: 0.7
        }
        this.observe()
    }

    observe() {
        let observer = new IntersectionObserver(this.navCheck, this.options)
        this.sections.forEach((section) => {
            observer.observe(section)
        })
    }

    navCheck(entries) {
        entries.forEach(entry => {
            const className = entry.target.className
            const activeAnchor = document.querySelector(`[data-page=${className}]`)
            const gradientIndex = entry.target.getAttribute('data-index')
            const coOrdinate = activeAnchor.getBoundingClientRect()
            const directions = {
                height: coOrdinate.height,
                width: coOrdinate.width,
                top: coOrdinate.top,
                left: coOrdinate.left
            }
            if (entry.isIntersecting) {
                this.bubble.style.setProperty('left', `${directions.left}px`)
                this.bubble.style.setProperty('top', `${directions.top}px`)
                this.bubble.style.setProperty('width', `${directions.width}px`)
                this.bubble.style.setProperty('height',`${directions.height}px`)
            }
        })
    }
}

let activeNav = new ActiveNav()