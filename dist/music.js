const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
	  {
        name: '生而为人',
        artist: '小倩',
        url: 'http://music.163.com/song/media/outer/url?id=1360334800.mp3',
        cover: '/images/1.jpg',
      },
      {
        name: "同桌的你",
        artist: '胡夏',
        url: 'http://music.163.com/song/media/outer/url?id=28387594.mp3',
        cover: '/images/2.jpg',
      },
      {
        name: '当我要走的时候',
        artist: '陈硕子',
        url: 'http://music.163.com/song/media/outer/url?id=421563082.mp3',
        cover: '/images/3.jpg',
      },
      {
        name: '理想三句',
        artist: '陈鸿宇',
        url: 'http://music.163.com/song/media/outer/url?id=569961623.mp3',
        cover: '/images/4.jpg',
      },
	  {
        name: '孙大剩',
        artist: '白亮',
        url: 'http://music.163.com/song/media/outer/url?id=473918016.mp3',
        cover: '/images/5.png',
      },
	  {
        name: '大眠 (完整版)原唱：王心凌',
        artist: '小乐哥',
        url: 'http://music.163.com/song/media/outer/url?id=3778678.mp3',
        cover: '/images/6.jpg',
      },
	  {
        name: '世间美好与你环环相扣',
        artist: '柏松',
        url: 'http://music.163.com/song/media/outer/url?id=1363948882.mp3',
        cover: '/images/7.jpg',
      },
	  {
        name: '飞',
        artist: '王恩信Est / 二胖u',
        url: 'http://music.163.com/song/media/outer/url?id=1386259535.mp3',
        cover: '/images/8.jpg',
      }
    ]
});

