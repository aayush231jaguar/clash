import React from 'react';
import './Games.css';

const games = [
    { id: 1, name: "Assassin's Creed Black Flag", description: "Set in the Golden Age of Piracy, follow Edward Kenway as he sails the Caribbean.", image: "assasinblack.jpg" },
    { id: 2, name: "Assassin's Creed Brotherhood", description: "Join Ezio Auditore as he fights to free Rome from the Templar Order.", image: "assasinbrother.webp" },
    { id: 3, name: "Assassin's Creed Mirage", description: "Experience the story of a master Assassin in a changing world.", image: "assasinmirage.jpg" },
    { id: 4, name: "Assassin's Creed Valhalla", description: "Lead your Viking clan to glory in medieval England.", image: "assasinvalhalla.png" },
    { id: 5, name: "Assassin's Creed Odyssey", description: "Embark on an epic journey in Ancient Greece as a mercenary.", image: "assasinodyssey.jpg" },
    { id: 6, name: "Assassin's Creed Origins", description: "Uncover the origins of the Brotherhood in Ancient Egypt.", image: "assasinorigin.jpg" },
    { id: 7, name: "Elden Ring", description: "Explore a vast, fantastical world created by Hidetaka Miyazaki and George R. R. Martin.", image: "eldenring.jpg" },
    { id: 8, name: "Forza Horizon 5", description: "Race across the vibrant landscapes of Mexico in the ultimate driving adventure.", image: "forza.jpg" },
    { id: 9, name: "Hogwarts Legacy", description: "Experience life as a student at Hogwarts School of Witchcraft and Wizardry.", image: "hogwartslegacy.jpg" },
    { id: 10, name: "Red Dead Redemption 2", description: "Follow Arthur Morgan and the Van der Linde gang in a tale of life in America's unforgiving heartland.", image: "rdr2.jpg" },
    { id: 11, name: "Mortal Kombat 1", description: "Engage in brutal combat with iconic fighters in the latest Mortal Kombat installment.", image: "mortalkombat.jpg" },
    { id: 12, name: "The Last of Us Part 1", description: "Survive a post-apocalyptic world as Joel and Ellie in a heart-wrenching journey.", image: "lastofus.jpg" },
    { id: 13, name: "Resident Evil Biohazard", description: "Enter a terrifying world of survival horror in the Baker family estate.", image: "rebio.jpg" },
    { id: 14, name: "Watch Dogs Legion", description: "Build a resistance to fight back against a dystopian London.", image: "watchdog.jpg" },
    { id: 15, name: "Valorant", description: "Compete in intense 5v5 tactical shooter matches with unique agents.", image: "valorant.jpg" },
    { id: 16, name: "GTA 5", description: "Live the lives of Michael, Franklin, and Trevor in the sprawling city of Los Santos.", image: "gta5.jpg" },
    { id: 17, name: "GTA Vice City", description: "Experience the vibrant 1980s Miami-inspired Vice City in this classic title.", image: "gtavice.jpg" },
    { id: 18, name: "Dota 2", description: "Join the world of competitive gaming in this action-packed MOBA.", image: "dota.jpg" },
];

const Games = () => {
    return (
        <div className="games">
            <h2>PS5 and PC Games</h2>
            <div className="games-list">
                {games.map(game => (
                    <div key={game.id} className="game-item">
                        <img src={game.image} alt={game.name} />
                        <h3>{game.name}</h3>
                        <p>{game.description}</p>
                        <button className="buy-now">Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Games;