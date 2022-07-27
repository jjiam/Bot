// https://assets2.lottiefiles.com/packages/lf20_4ygghcz8.json
const tag = document.getElementById('animation')
const animation = bodymovin.loadAnimation({
    container: tag,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets2.lottiefiles.com/packages/lf20_4ygghcz8.json'
})