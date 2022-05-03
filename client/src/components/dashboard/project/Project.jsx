import { Add } from 'grommet-icons';
import { useParams } from 'react-router-dom';

function Project() {

  const { projectId } = useParams();

  const render = () => {
    return (
      <div className="Project-Layout">
        <h1 className="Title-Text">{projectId}</h1>
        <button className="Button Button__Primary mt-20">Create subject</button>
        <div className="Project-Layout__Todo-List">
          <div className="Project-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              value="This is my first todo in todoizer."
            />
          </div>
          <div className="Project-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              value="This is my first todo in todoizer."
            />
          </div>
          <div className="Project-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              value="This is my first todo in todoizer."
            />
          </div>
          <div className="Project-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              value="This is my first todo in todoizer."
            />
          </div>
          <div className="Project-Layout__Todo-List__Item">
            <input type="checkbox" name="" id="" />
            <input
              className="Textfield-No-Bg"
              type="text"
              value="This is my first todo in todoizer."
            />
          </div>

          <div className="Textfield-With-Icon__No-Bg mt-10 w-100">
            <Add />
            <input
              className="w-100"
              type="text"
              name="user_email"
              placeholder="Add a new Todo"
            />
          </div>
        </div>
      </div>
    );
  }

  return render();
}

export default Project;