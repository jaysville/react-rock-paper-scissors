import { useEffect, useState } from "react";
import Container from "./components/Container";
import Display from "./components/ui/Display";
import { ChoiceButton, ResetButton } from "./components/ui/buttons";
import ScoreCard from "./components/ui/score-card";

function App() {
  const weapons = ["Rock", "Paper", "Scissors"];

  const [choice, setChoice] = useState({
    player: "",
    computer: "",
  });

  const [isStarted, setIsStarted] = useState(false);
  const [seconds, setSeconds] = useState(60);
  const [scores, setScores] = useState({
    player: 0,
    computer: 0,
  });
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    updateScores();
  }, [choice]);

  useEffect(() => {
    //code to start timer when player chooses a weapon for the first time.
    if (isStarted) {
      const timer = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          setIsGameOver(true);
          clearInterval(timer);
        }
      }, 1000);

      //clear interval on unmount
      return () => clearInterval(timer);
    }
  }, [isStarted, seconds, isGameOver]);

  useEffect(() => {
    if (isGameOver) {
      if (scores.player > scores.computer) {
        setWinner("Player");
      } else if (scores.player === scores.computer) {
        setWinner("Tie");
      } else {
        setWinner("Computer");
      }
      alert("Game Over");
    }
  }, [isGameOver, scores.player, scores.computer]);

  const updateScores = () => {
    if (!isGameOver) {
      if (choice.player === "Rock" && choice.computer === "Scissors") {
        setScores((prevScores) => ({
          ...prevScores,
          player: prevScores.player + 1,
        }));
      } else if (choice.player === "Paper" && choice.computer === "Rock") {
        setScores((prevScores) => ({
          ...prevScores,
          player: prevScores.player + 1,
        }));
      } else if (choice.player === "Scissors" && choice.computer === "Paper") {
        setScores((prevScores) => ({
          ...prevScores,
          player: prevScores.player + 1,
        }));
      } else if (choice.computer === "Rock" && choice.player === "Scissors") {
        setScores((prevScores) => ({
          ...prevScores,
          computer: prevScores.computer + 1,
        }));
      } else if (choice.computer === "Paper" && choice.player === "Rock") {
        setScores((prevScores) => ({
          ...prevScores,
          computer: prevScores.computer + 1,
        }));
      } else if (choice.computer === "Scissors" && choice.player === "Paper") {
        setScores((prevScores) => ({
          ...prevScores,
          computer: prevScores.computer + 1,
        }));
      }
    }
  };

  const handlePick = (weapon) => {
    if (!isStarted) {
      setIsStarted(true);
    }

    if (!isGameOver) {
      //this generates a random number between 0-2
      const randomNumber = Math.floor(Math.random() * 3);
      // when the button is clicked, a random choice is selected from the weapons array
      // and is assigned to the computer choice state
      setChoice({
        player: weapon,
        computer: weapons[randomNumber],
      });
    }
  };

  const resetGame = () => {
    setChoice({
      player: "",
      computer: "",
    });
    setIsStarted(false);
    setSeconds(60);
    setScores({
      player: 0,
      computer: 0,
    });
    setIsGameOver(false);
    setWinner(null);
  };
  return (
    <Container>
      <h1>Rock Paper Scissors</h1>
      <p>Score as many points as you can before the timer runs out.</p>
      <p>Do not Refresh</p>

      {winner === "Player" && <h3>You Win!</h3>}
      {winner === "Computer" && <h3>You Lose!</h3>}
      {winner === "Tie" && <h3>It's a tie!</h3>}

      <div>
        <ScoreCard> Player: {scores.player}</ScoreCard>
        <ScoreCard>Computer: {scores.computer}</ScoreCard>
      </div>

      <Display>
        <div>
          Your Pick:
          <span>{choice.player}</span>
        </div>
        <div>
          Computer Pick:
          <span>{choice.computer}</span>
        </div>
      </Display>

      <h2>Choose Your Weapon!</h2>
      <div>
        {weapons.map((weapon, i) => {
          return (
            <ChoiceButton
              key={i}
              onClick={() => {
                handlePick(weapon);
              }}
            >
              {weapon}
            </ChoiceButton>
          );
        })}
      </div>
      <section>Time Left: {seconds}s</section>

      <ResetButton onClick={resetGame}>Reset</ResetButton>
    </Container>
  );
}

export default App;
