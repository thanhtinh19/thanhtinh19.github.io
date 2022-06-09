
 /*
1.Render song
2.Scroll top
3.Play, pause,seek
4.CD rotate
5.Next/prev
6.Random
7.Next/repeat when ended
8.Active song
9.Scroll active song into view
10.Play song when click
*/
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playlist = $(".playlist");

const app = {
  songs: [
    {
      name: "Ai chung tình được mãi",
      singer: "Đinh Tùng Huy, ACV",
      path: "./music/AiChungTinhDuocMai.mp3",
      image: "./img/AiChungTinhDuocMai.jpg",
    },
    {
      name: "Ái Nộ",
      singer: "Masew, Khôi Vũ",
      path: "./music/AiNo.mp3",
      image: "./img/AiNo.jpg",
    },
    {
      name: "Ánh sao và bầu trời",
      singer: "T.R.I",
      path: "./music/AnhSaoVaBauTroi.mp3",
      image: "./img/AnhSaoVaBauTroi.jpg",
    },
    {
      name: "Buồn không thể buông",
      singer: "MiiNa",
      path: "./music/BuonKhongTheBuong.mp3",
      image: "./img/BuonKhongTheBuong.jpg",
    },
    {
      name: "Cưới thôi",
      singer: "Masew,Masiu",
      path: "./music/CuoiThoi.mp3",
      image: "./img/CuoiThoi.jpg",
    },
    {
      name: "Đám cưới nha",
      singer: "Hồng Thanh, Mie",
      path: "./music/DamCuoiNha.mp3",
      image: "./img/DamCuoiNha.jpg",
    },
    {
      name: "Hàng Xóm",
      singer: "Anh Tú, Lyly",
      path: "./music/HangXom.mp3",
      image: "./img/HangXom.jpg",
    },
    {
      name: "Yêu em hơn mỗi ngày",
      singer: "Andiez",
      path: "./music/YeuEmHonMoiNgay.mp3",
      image: "./img/YeuEmHonMoiNgay.png",
    },
  ],
  render: function () {
    const htmls = this.songs.map((song) => {
      return `
        <div class="song">
          <div class="thumb" style="background-image: url('${song.image}')">
          </div>
          <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
          </div>
          <div class="option">
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </div>
        `;
    });
    $(".playlist").innerHTML = htmls.join("");
  },
  handleEvents: function () {
    const cd = $(".cd");
    const cdWidth = cd.offsetWidth;
    document.onscroll = function () {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      console.log(newCdWidth);
      cd.style.opacity = newCdWidth / cdWidth;
    };
  },
  start: function () {
    this.handleEvents();

    this.render();
  },
};
app.start();