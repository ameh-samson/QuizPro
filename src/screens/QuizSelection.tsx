interface QuizSelectionProps {
  userName: string | null;
}

// Use the props in the component
const QuizSelection: React.FC<QuizSelectionProps> = ({ userName }) => {
  return (
    <div>
      <h2>Welcome {userName}</h2>
    </div>
  );
};

export default QuizSelection;
