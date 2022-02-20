import { addOrSubtract } from "../../lambda-fns/hello-world";

test('Lambda handler', () => {
    console.log('hello');
    console.log(addOrSubtract('add', 5, 8));
    expect(addOrSubtract('add', 5, 8)).toBe(13);
});