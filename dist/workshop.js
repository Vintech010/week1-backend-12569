"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classroom = [
    { id: 1, name: "Alice", score: 45 },
    { id: 2, name: "Bob", score: 85 },
];
function processClass(students) {
    return students.map(s => ({
        ...s,
        status: s.score >= 50 ? "Pass" : "Fail",
    }));
}
const finalResults = processClass(classroom);
console.log(finalResults);
//# sourceMappingURL=workshop.js.map