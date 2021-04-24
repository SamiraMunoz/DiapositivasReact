import './App.css';
import Header from './components/Header';
import Diapositivas from './components/Diapositiva';


function App() {
  // Vector con contenido de las diapositivas
  const diapositivas = [
    {
        title: "Today's workout plan",
        text: "We're gonna do 3 fundamental exercises."
    },
    {
        title: "First, 10 push-ups",
        text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
        title: "Next, 20 squats",
        text: "Squats are important. Remember to keep your back straight."
    },
    {
        title: "Finally, 15 sit-ups",
        text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
        title: "Great job!",
        text: "You made it, have a nice day and see you next time!"
    }
  ];

  return (
    <div className="App">
      <Header/>
      {/* Enviar vector diapositivas por medio de hook al componente Diapositiva */}
      <Diapositivas diapositivas={diapositivas}/>
    </div>
  );
}

export default App;
