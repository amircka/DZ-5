let tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
let tagCounts = {};

for (let tag of tags) {
    if (tagCounts[tag]) {
        tagCounts[tag]++;
    } else {
        tagCounts[tag] = 1;
    }
}
let sortedTagCounts = Object.entries(tagCounts).sort((a, b) => b[1] - a[1]);
let sortedTagCountsObject = Object.fromEntries(sortedTagCounts);
console.log(sortedTagCountsObject);

// У


function filterBooks(...books) {
    const booksY = [];
    const otherBooks = [];

    for (let book of books) {
        if (book.toLowerCase().includes('у')) {
            booksY.push(book)
        } else {
            otherBooks.push(book)
        }
    }
    console.log("Книги с буквой 'у':", booksY);
    console.log("Остальные книги:", otherBooks);
}

filterBooks('Богатый папа, бедный папа','Мост','Аррифуретта сильнейший ремеслиник','День у','Морской охотник','Ученье','Кухня','Мег');


OBJECT

const courses = [
    {
        courseName: 'JavaScript',
        students: [
            { name: 'John', grades: [60, 55, 95] },
            { name: 'Jack', grades: [59, 90, 95] }
        ]
    },
    {
        courseName: 'Python',
        students: [
            { name: 'Mark', grades: [78, 82, 80] },
            { name: 'Alice', grades: [85, 88, 90] }
        ]
    }
];

const coursesWith = courses.map(course => {
    const averegeGrade = course.students.map(stydent => {
        const averegeGrade = stydent.grades.reduce((sum, grade) => sum + grade, 0) / stydent.grades.length
        return{ name: stydent.name, averegeGrade: averegeGrade}
    })
    return {
        courseName: course.courseName,
        students: averegeGrade
    }
})

console.log(coursesWith)
