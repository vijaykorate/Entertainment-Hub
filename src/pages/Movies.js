import React from "react";

function Anime() {
  const animeList = [
    {
      title: "Naruto",
      description:
        "A young ninja strives to become the strongest leader, the Hokage.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
      link: "https://www.google.com/search?q=naruto", // Change URL here
    },
    {
      title: "Attack on Titan",
      description:
        "Humanity fights for survival against giant humanoid Titans.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/7/7a/Shingeki_no_Kyojin_manga_volume_1.jpg",
      link: "https://www.google.com/search?q=attack+on+titan",
    },
    {
      title: "Demon Slayer",
      description: "A boy seeks to save his sister and defeat demons.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0b/Demon_Slayer_Volume_1.jpg",
      link: "https://www.google.com/search?q=demon+slayer",
    },
    {
      title: "One Piece",
      description:
        "A pirate crew searches for the ultimate treasure, the One Piece.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6d/OnePieceVolume1Cover.jpg",
      link: "https://www.google.com/search?q=one+piece",
    },
    {
      title: "My Hero Academia",
      description:
        "A world of heroes and villains; a boy dreams of becoming a hero.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/0c/My_Hero_Academia_Volume_1.jpg",
      link: "https://www.google.com/search?q=my+hero+academia",
    },
    {
      title: "Fullmetal Alchemist: Brotherhood",
      description:
        "Two brothers use alchemy to recover their bodies after a tragic accident.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/0/03/FullmetalAlchemistBrotherhoodVol1.jpg",
      link: "https://www.google.com/search?q=fullmetal+alchemist",
    },
    {
      title: "Death Note",
      description:
        "A student discovers a notebook that can kill anyone whose name is written in it.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg",
      link: "https://www.google.com/search?q=death+note",
    },
    {
      title: "Dragon Ball Z",
      description: "Epic battles of Saiyans and defenders of Earth.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/5e/Dragon_Ball_Z_Volume_1.jpg",
      link: "https://www.google.com/search?q=dragon+ball+z",
    },
    {
      title: "Tokyo Revengers",
      description:
        "A man travels back in time to save his friends and change the future.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/fd/Tokyo_Revengers_volume_1_cover.jpg",
      link: "https://www.google.com/search?q=tokyo+revengers",
    },
    {
      title: "Jujutsu Kaisen",
      description: "A boy fights curses using powerful jujutsu techniques.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/f/f0/Jujutsu_Kaisen_volume_1_cover.jpg",
      link: "https://www.google.com/search?q=jujutsu+kaisen",
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Top 10 Anime Series 🎌</h1>
      <div className="row">
        {animeList.map((anime, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div
              className="card h-100 shadow-sm"
              style={{ cursor: "pointer" }}
              onClick={() => window.open(anime.link, "_blank")}
            >
              <img
                src={anime.image}
                className="card-img-top"
                alt={anime.title}
                style={{ height: "300px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">{anime.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Anime;
