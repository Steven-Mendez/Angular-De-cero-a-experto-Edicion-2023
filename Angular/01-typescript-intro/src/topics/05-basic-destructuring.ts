interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: 'Mess',
  details: {
    author: 'Ed Sheeran',
    year: 2015,
  },
};

const song = 'New Song';
const {
  song: anotherSong,
  songDuration: duration,
  //   details: { author, year },
} = audioPlayer;

const { author, year } = audioPlayer.details;

console.table({ song, anotherSong, duration, author, year });

const [, , trunks = 'Not found']: string[] = ['Goku', 'Vegeta'];
console.log('Personaje 3: ', trunks);

export {};
