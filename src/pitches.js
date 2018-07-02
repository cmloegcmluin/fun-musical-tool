import { BASE_PITCH } from './constants'

const pitches = [...Array(81).keys()].map(n => BASE_PITCH / (n + 1) )

// console.log(pitches)

export default pitches
