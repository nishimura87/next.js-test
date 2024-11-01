import List from "./components/List";

const Home: React.FC = () => {
  return(
  <div>
    <List title="To Do" />
    <List title="In Progress" />
    <List title="Done" />
  </div>
  );
};

export default Home;