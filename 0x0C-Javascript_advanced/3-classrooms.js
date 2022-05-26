function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function() {return seat};
  };
  let students = [];
  let i = 0;
  while(i < numbersOfStudents){
    students.push(studentSeat(i + 1));
    i++;
  }
  return students;
}
classRoom = createClassRoom(10);


