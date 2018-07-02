import notes from './notes'
import buildVoice from './buildVoice'

const entities = [
	{notes: notes.mainDescent, voice: buildVoice('square'), id: 0, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.backbone, voice: buildVoice('sine'), id: 1, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.firstLayer, voice: buildVoice('sawtooth'), id: 2, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.secondLayer, voice: buildVoice('triangle'), id: 3, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.thirdLayer, voice: buildVoice('sawtooth'), id: 4, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.mainDescentContinuation, voice: buildVoice('square'), id: 5, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	// {notes: notes.experimentPartTwo, voice: buildVoice('triangle'), id: 6, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.threePartsToEachMainDescentStep, voice: buildVoice('sawtooth'), id: 7, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.threePartsToEachMainDescentStepContinuation, voice: buildVoice('sawtooth'), id: 8, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.maximumPartsToEachMainDescentStep, voice: buildVoice('triangle'), id: 9, noteIndex: 0, nextOnset: 0, nextOffset: 0},
	{notes: notes.maximumPartsToEachMainDescentStepContinuation, voice: buildVoice('triangle'), id: 10, noteIndex: 0, nextOnset: 0, nextOffset: 0},
]

export default entities
