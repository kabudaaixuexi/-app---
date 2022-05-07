interface Configure {
    onChange: Function,
    operable: Boolean,
    value: Target,
    watermark: String
}

type Target = any

const getUuiD = (randomLength = Math.random()) => {
    return Number(Math.random().toString().substr(2,randomLength) + Date.now()).toString(36)
}