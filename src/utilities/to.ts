// tslint:disable:variable-name no-any

import { Cents, Frequency, Offset, Scalar, Semitones } from './nominalTypes'

const Cents: (cents: number) => Cents =
    (cents: number): Cents => cents as any

const Frequency: (frequency: number) => Frequency =
    (frequency: number): Frequency => frequency as any

const Semitones: (semitones: number) => Semitones =
    (semitones: number): Semitones => semitones as any

const Scalar: (scalar: number) => Scalar =
    (scalar: number): Scalar => scalar as any

const Offset: (offset: number) => Offset =
    (offset: number): Offset => offset as any

export {
    Cents,
    Frequency,
    Semitones,
    Scalar,
    Offset,
}
