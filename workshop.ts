type Student = {
  id: number;
  name: string;
  score: number;
  status?: "Pass" | "Fail";
};

const classroom: Student[] = [
  { id: 1, name: "Alice", score: 45 },
  { id: 2, name: "Bob", score: 85 },
];

function processClass(students: Student[]): Student[] {
  return students.map(s => ({
    ...s,
    status: s.score >= 50 ? "Pass" : "Fail",
  }));
}

const finalResults = processClass(classroom);
console.log(finalResults);