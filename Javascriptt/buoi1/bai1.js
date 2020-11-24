const listPersons = [
  { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
  { name: "Lê Văn Nam", age: 60, gender: "nam" },
  { name: "Trần Chiến Công", age: 8, gender: "nam" },
  { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
  { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
  { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
  { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
  { name: "Hà Văn Phòng", age: 30, gender: "nam" },
  { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
  { name: "Lê Văn Hà", age: 55, gender: "nam" },
];
function countPersonByGender(listPerson, gender) {
  let count = 0;
  for (let i in listPersons) {
    if (listPerson[i].gender == gender) {
      count++;
    }
  }
  return count;
}

function statisticsByAge(listPerson) {
  let child = 0;
  let youth = 0;
  let old = 0;
  for (let i = 0; i < listPerson.length; i++) {
    if (listPerson[i].age < 18) child++;
    else if (listPerson[i].age > 18 && listPerson[i].age < 30) youth++;
    else old++;
  }

  const statisticsByAge = {
    childs: child,
    youths: youth,
    olds: old,
  };

  return statisticsByAge;
}

function main() {
  console.log(`${countPersonByGender(listPersons, "nam")} nam`);
  console.log(`${countPersonByGender(listPersons, "nữ")} nữ`);
  console.log(statisticsByAge(listPersons));
}

main();
