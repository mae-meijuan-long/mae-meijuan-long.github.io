describe("filter", () => {
    it("Remove banned words from a string",
        () => {
            assert.equal("The color of the car is not good".filter("not"), "The color of the car is  good");
        });
});

describe("BubbleSort", () => {
    it("Sort an array using Bubblesort",
        () => {
            assert.equal([4,7,2,0,1].bubbleSort().toString(), [0,1,2,4,7].toString());
        });
});

describe("Inheritance", () => {
    it("Teacher object derived from the Person class", () => {
        const teacher = new Teacher();
        teacher.initialize("Meijuan Long", 26);
        expect(teacher instanceof Person).to.be.true;
        expect("Meijuan Long, 26 years old.").to.eql(teacher.describe());
    });
});