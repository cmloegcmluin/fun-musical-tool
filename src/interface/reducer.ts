import { Song } from '../songTypes'
import { Entities } from '../types'
import { Action, ActionType } from './actions'
import { initialState, State } from './state'
import { stringifyConfig } from './stringifyConfig'
import { InterfaceConfig } from './types'

const reducer: (state: State | undefined, action: Action) => State =
    (state: State = initialState, action: Action): State => {
        switch (action.type) {
            case ActionType.SET_SONG_AND_INTERFACE_CONFIG_FROM_SONG: {
                const song: Song = action.data

                const stringifiedConfig: InterfaceConfig = stringifyConfig(song.config)

                return state
                    .set('song', song)
                    .set('interfaceConfig', stringifiedConfig)
                    .set('actualCurrentConfig', stringifiedConfig)
            }
            case ActionType.SET_ACTUAL_CURRENT_CONFIG: {
                const actualCurrentConfig: InterfaceConfig = action.data

                return state
                    .set('actualCurrentConfig', actualCurrentConfig)
            }
            case ActionType.SET_INTERFACE_CONFIG: {
                const interfaceConfig: InterfaceConfig = action.data

                return state
                    .set('interfaceConfig', interfaceConfig)
            }
            case ActionType.SET_ENTITIES: {
                const entities: Entities = action.data

                return state
                    .set('entities', entities)
            }
            default: {
                return state
            }
        }
    }

export {
    reducer,
}
