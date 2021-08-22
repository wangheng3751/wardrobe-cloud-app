const actionsheet = require("./actionsheet")
// @ponicode
describe("hide", () => {
    let inst

    beforeEach(() => {
        inst = new actionsheet()
    })

    test("0", () => {
        let callFunction = () => {
            inst.hide()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("onSelected", () => {
    let inst

    beforeEach(() => {
        inst = new actionsheet()
    })

    test("0", () => {
        let callFunction = () => {
            inst.onSelected([-1, 0.5, 1, 2, 3, 4, 5])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.onSelected(["foo bar", -0.353, "**text**", 4653])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.onSelected(["a", "b", "043", "holasenior"])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.onSelected([10, -45.9, 103.5, 0.955674])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.onSelected(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
