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

const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const player = $(".player");

const app = {
  currentIndex: 0,
  isPlaying: false,
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
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: () => {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    //xử lý phóng to/thu nhỏ cd
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      console.log(newCdWidth);
      cd.style.opacity = newCdWidth / cdWidth;
    };

    //click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        _this.isPlaying = false;
        audio.pause();
        player.classList.remove("playing");
      } else {
        _this.isPlaying = true;
        audio.play();
        player.classList.add("playing");
      }
    };
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;

    console.log();
  },
  start: function () {
    //Định nghĩa các thuộc tính cho object
    this.defineProperties();

    //lắng nghe xử lý các sự kiện
    this.handleEvents();

    //tải thông tin bài hát đầu tiên khi chạy
    this.loadCurrentSong();

    //render playlist
    this.render();
  },
};
app.start();
