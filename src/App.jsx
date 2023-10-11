import './App.css';
import InputField from './Components/InputField/InputField';

function App() {
  //TODO Suppose we fetch active user data here using useEffect or getting the object via props if possible
  const activeUser = {
    name: 'Juliana',
    icon: '/assets/userIcon.svg',
  };

  return (
    <>
      <div>
        <h1 className="font-bold text-center text-xl">Hello Vetted World!</h1>
        <p className="text-center">
          Developed using React + Vite, and styled with Tailwind CSS.
        </p>
        <div className="flex justify-center mt-5">
          <InputField activeUser={activeUser} />
        </div>
        <p className="text-center mt-10">
          Powered by <strong>Mau&apos;s Creativity</strong>
        </p>
      </div>
    </>
  );
}

export default App;
