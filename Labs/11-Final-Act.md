```md
I want you to create an React animation of an airplane doing manouvers. Implement the following function: `export const animateManeuvers = (airplaneRef: MutableRefObject<null>, maneuvers: string)`.

## AerobaticSequence Examples

    - L4B-H2C-R3A-S1D-T2E
    - L1A-H1B-R1C-T1E
    - L2A-H2B-R2C

## Maneuver

    - Manouvers: L = Loop, H = Hammerhead, R = Roll, S = Spin, T = Tailslide
    - Number represents repeat count
    - The Letter represents difficulty (A-E)

## Animation

- The manouvers should follow up eachother and not go at the same time
- Use the UTF8 icon of an airplane for the airplane
- Difficulty translates into an increased duration of the animation
- The Looping is a 360 full circle using a gsap motion path
- The Hammerhead should be a 180 degree turn on the vertical axis and go right at the same time
- The Roll should be going up and down and a 360 degree roll on the horizontal axis at the same time
- The Spin should be a 360 degree turn on the vertical axis
- The Tailslide should 180 degree turn and the plane going backwards at the same time
- During the animation the airplane is moving forward constantly

## Technical Requirements

- Use GSAP library for the animations
- Use a gsap timeline.to for the animations
- Use GSAP Motion for the Looping

Give me the complete solution
```
