import { buildEntity } from '../../../src/compile/buildEntity'
import { defaultSongCompile } from '../../../src/compile/defaultSongCompile'
import { ActionType, SetEntities } from '../../../src/interface/actions'
import { reducer } from '../../../src/interface/reducer'
import { immutablizeState, State } from '../../../src/interface/state'
import { Song, SongName } from '../../../src/songTypes'
import { Entities, Entity } from '../../../src/types'
import * as to from '../../../src/utilities/to'

describe('reducer', () => {
    it('sets entities', () => {
        const state: State = immutablizeState({
            customConfig: {},
            entities: [],
            songName: SongName.HAFUHAFU,
            standardConfig: {},
        })
        const testSong: Song = {
            compile: defaultSongCompile,
            customConfig: {},
            entityConfigs: [],
            formattedName: '',
            name: SongName.HAFUHAFU,
            scales: [],
            standardConfig: {
                baseFrequency: to.Frequency(0),
            },
        }
        const testEntity: Entity = buildEntity({}, testSong)

        const newEntities: Entities = [testEntity]
        const action: SetEntities = {
            data: newEntities,
            type: ActionType.SET_ENTITIES,
        }

        const newState: State = reducer(state, action)

        const expectedState: State = immutablizeState({
            customConfig: {},
            entities: newEntities,
            songName: SongName.HAFUHAFU,
            standardConfig: {},
        })
        expect(newState.toJS()).toEqual(expectedState.toJS())
    })
})
