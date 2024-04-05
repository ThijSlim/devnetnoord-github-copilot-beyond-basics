```md
Parse a AerobaticSequenceSignature property into a c# model.

## AerobaticSequence Examples

- L4B-H2C-R3A-S1D-T2E
- L1A-H1B-R1C-T1E
- L2A-H2B-R2C

## Maneuver

- Manouvers: L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
- Number represents repeat count
- The Letter represents difficulty (A-E)
- Difficulty multipliers: A = 1.0, B = 1.2, C = 1.4, D = 1.6, E = 1.8

## AerobaticSequence Difficulty Method

- Add a difficulty calculation method with the following rules:
- A roll after a loop is scored double
- A spin after a tailslide is scored triple

## Chain-of-Thought reasoning

Example: L4B-R3A-H2C-T2E-S1D

- Loop: 4 \* 1.2 = 4.8
- Roll: 3 \* 1 \* 2(roll after a loop) = 6.0
- Hammerhead: 2 \* 1.4 = 2.8
- Tailslide: 2 \* 1.8 = 3.6
- Spin: 1 \* 1.6 \* 3(spin after a tailslide) = 4.8

Total: 22

## Technical Requirements

- Create a AerobaticSequence class with a list of Maneuvers and a difficulty property
- Add the Maneuver class inside the AerobaticSequence class
- Use static Parse method to parse the AerobaticSequenceSignature
- Parse the signature with a Regex
- include usings at the top of the file
- Round the difficulty result to 2 decimal places

Let's think step by step.
```
