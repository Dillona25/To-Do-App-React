import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";
import TaskModal from "./TaskModal";
import Todo from "./Todo";
import Profile from "./Profile";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ConfirmationModal from "./ConfirmationModal";
import EditTask from "./EditTask";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
uuidv4();
import Settings from "../Settings route/Settings";
import FeedbackModal from "../Settings route/FeedbackModal";
import PasswordModal from "../Settings route/PasswordModal";

function App() {
  const [activeModal, setActiveModal] = useState([]);
  const [showMain, setShowMain] = useState(true);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const toggleTaskModal = () => {
    setActiveModal("taskModal");
  };

  const toggleProfileModal = () => {
    setActiveModal("profileModal");
  };

  const toggleConfirmationModal = () => {
    setActiveModal("confirmModal");
  };

  const toggleFeedbackModal = () => {
    setActiveModal("contactModal");
  };

  const togglePasswordModal = () => {
    setActiveModal("passwordModal");
  };

  const toggleCloseModal = () => {
    setActiveModal("");
  };

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.value);
  };

  const handleShowMain = () => {
    setShowMain(false);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toggleCloseModal();
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <BrowserRouter>
      <div className="App max-w-[700px] m-auto">
        <Route exact path="/">
          <Header
            toggleProfileModal={toggleProfileModal}
            name={name}
            profileImage={profileImage}
          />
          <Nav
            toggleTaskModal={toggleTaskModal}
            toggleProfileModal={toggleProfileModal}
          />
          {showMain && <Main />}
          {activeModal === "taskModal" && (
            <TaskModal
              toggleCloseModal={toggleCloseModal}
              addTodo={addTodo}
              handleShowMain={handleShowMain}
            />
          )}
          <div className="max-h-[500px] overflow-auto">
            {todos.map((todo, index) =>
              todo.isEditing ? (
                <EditTask key={index} editTodo={editTask} task={todo} />
              ) : (
                <Todo
                  task={todo}
                  key={index}
                  toggleComplete={toggleComplete}
                  toggleConfirmationModal={toggleConfirmationModal}
                  editTodo={editTodo}
                />
              )
            )}
          </div>
          {activeModal === "confirmModal" &&
            todos.map((todo, index) => (
              <ConfirmationModal
                task={todo}
                key={index}
                deleteToDo={deleteToDo}
                toggleCloseModal={toggleCloseModal}
              />
            ))}
        </Route>
        <Switch>
          <Route path="/Profile">
            <Profile
              name={name}
              profileImage={profileImage}
              toggleCloseModal={toggleCloseModal}
              handleNameChange={handleNameChange}
              handleImageChange={handleImageChange}
            />
          </Route>
          <Route path="/Settings">
            <Settings
              toggleFeedbackModal={toggleFeedbackModal}
              togglePasswordModal={togglePasswordModal}
            ></Settings>
          </Route>
        </Switch>
        {activeModal === "contactModal" && (
          <FeedbackModal toggleCloseModal={toggleCloseModal} />
        )}
        {activeModal === "passwordModal" && (
          <PasswordModal toggleCloseModal={toggleCloseModal} />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
