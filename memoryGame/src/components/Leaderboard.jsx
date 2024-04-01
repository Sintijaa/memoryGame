import React, { useState, useEffect } from 'react';
import '../style/leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    
    const dummyData = [
      { username: 'user1', score: 100 },
      { username: 'user2', score: 90 },
      { username: 'user3', score: 80 },
      { username: 'user4', score: 70 },
      { username: 'user5', score: 60 }
    ];
    setLeaderboardData(dummyData);
  }, []);

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
