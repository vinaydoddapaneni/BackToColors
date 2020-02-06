function backToColors(options) {
    let images = document.querySelectorAll('.backtocolors')

    if (options.to_colors === 'hard')
        options.to_colors = '0px'
    else
        options.to_colors = '15px'


    images.forEach(img => {
        img.style.boxShadow = `10px 10px ${options.to_colors} 1px rgba(0,0,0,0.12)`

        if (options.padding) {
            img.style.padding = '1em'
        }
    })
}

module.exports.backToColors = backToColors