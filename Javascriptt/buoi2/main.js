console.log("_____________________BAI 0_____________________");

const listAccounts = [
  { id: 1, username: "aduvip", balance: 1000000, type: "normal" },
  { id: 2, username: "aduvip1", balance: 500000, type: "normal" },
  { id: 3, username: "aduvip2", balance: 0, type: "normal" },
  {
    id: 4,
    username: "aduvip3",
    balance: 20000,
    type: "normal",
    isActive: false,
  },
  { id: 5, username: "aduvip4", balance: 2500000, type: "normal" },
  { id: 6, username: "aduvip5", balance: 0, type: "normal", isActive: false },
  { id: 7, username: "aduvip6", balance: 1300000, type: "normal" },
  { id: 8, username: "aduvip7", balance: 2200000, type: "normal" },
  {
    id: 9,
    username: "aduvip8",
    balance: 1450000,
    type: "normal",
    isActive: false,
  },
  { id: 10, username: "aduvip9", balance: 0, type: "normal" },
  {
    id: 11,
    username: "aduvip10",
    balance: 780000,
    type: "normal",
    isActive: false,
  },
  { id: 12, username: "aduvip11", balance: 560000, type: "normal" },
  { id: 13, username: "aduvip12", balance: 0, type: "normal", isActive: false },
  { id: 14, username: "aduvip13", balance: 430000, type: "normal" },
  {
    id: 15,
    username: "aduvip14",
    balance: 990000,
    type: "normal",
    isActive: false,
  },
  { id: 16, username: "aduvip15", balance: 10000, type: "normal" },
];

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



console.log("loại balance <= 500000");
const listBalance = listAccounts.filter(function (value, index) {
  return value.balance > 500000;
});
console.log(listBalance)



console.log(
  "loại id ra khỏi tài khoản, nếu chưa có thuộc tính active thì đặt isActive = null nếu đã có thì isActive = true"
);
const newListAccount = listAccounts.map(function (value, index) {
  if (value.isActive == false) {
    value.isActive = true;
  } else {
    value.isActive = null;
  }
  return `username: ${value.username}, balance: ${value.balance}, type: ${value.type}, isActive: ${value.isActive}`;
});
console.log(newListAccount);



const totalBalance = listAccounts.reduce((a, b) => {
  return a + b.balance;
}, 0);
console.log(`tổng balance là: ${totalBalance}`);



console.log("Thống kê theo tuổi: ");
const statisticsByAge = listPersons.reduce(
  (acc, currentVal) => {
    if (currentVal.age < 18) acc.treCon++;
    else if (currentVal.age <= 30 && currentVal.age >= 18) acc.thanhNien++;
    else acc.nguoiGia++;
    return acc;
  },
  {
    treCon: 0,
    thanhNien: 0,
    nguoiGia: 0,
  }
);
console.log(statisticsByAge);



console.log("_____________________BAI 1_____________________");

console.log(`Đếm số lần xuất hiện của các phần tử: `);
const arr = [1, 2, 3, 4, 3, 1, 2, 5, 6, 7, 5, 6, 8, 7];
const countElement = arr.reduce(function (allNumbers, numbers) {
  if (numbers in allNumbers) {
    allNumbers[numbers]++;
  } else {
    allNumbers[numbers] = 1;
  }
  return allNumbers;
}, {});
console.log(countElement);



console.log("_____________________BAI 2_____________________");

const comments = [
  {
    body: "5 điều Bác Hồ dạy",
    child: [
      {
        body: "1. Yêu tổ quốc, yêu đồng bào",
        child: [],
      },
      {
        body: "2. Học tập tốt, lao động tốt",
        child: [],
      },
      {
        body: "3. Đoàn kết tốt, kỷ luật tốt",
        child: [],
      },
      {
        body: "4. Giữ gìn vệ sinh thật tốt",
        child: [],
      },
      {
        body: "5. Khiêm tốt, thật thà, dũng cảm",
        child: [],
      },
    ],
  },
  {
    body: "Ơ mây dình, gút chóp em",
    child: [
      {
        body: "Level 2",
        child: [
          {
            body: "Level 3",
            child: [
              {
                body: "Level 4",
                child: [],
              },
            ],
          },
          {
            body: "Level 3.1",
            child: [],
          },
        ],
      },
    ],
  },
  {
    body: "Anh rất chào em",
    child: [],
  },
];

function flattenComments(comments) {
  const flattenedComments = comments.reduce((accumulator, currentVal) => {
    
    accumulator.push(currentVal.body);

    if (currentVal.child.length > 0) {
      accumulator = accumulator.concat(flattenComments(currentVal.child));
    }
    return accumulator;
  }, []);

  return flattenedComments;
}

const flattenedComments = flattenComments(comments);
console.log(flattenedComments);
