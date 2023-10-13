describe('Ignore Invalid Instructions', () => {
    it("Ignores Invalid Instructions",()=>{
        const x = 1
        const y = 1
        const rover = {
            x: x,
            y: y,

            executeInstruction: function(instructions) {

            }
        }
        rover.executeInstruction("XXXXX")
        expect(rover.x).toEqual(x)
        expect(rover.y).toEqual(y)
    })
});