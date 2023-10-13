describe("initialTestBlock", () => {

	it("Quering State", () => {

		rover = {
			x: 1,
			y:1,
			direction: 'North',
			query: function (command) {
				return "Coordinates: " + this.x + ',' + this.y + ', Direction: ' + this.direction;
			}
		}

		expect(rover.query('Q')).toBe("Coordinates: 1,1, Direction: North");
	})
})
