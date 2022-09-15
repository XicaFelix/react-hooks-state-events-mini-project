import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [category, setCategory] = useState('code')
  const [text, setText] = useState('')
  const categoryList = categories.filter((item) =>item !== 'All').map((item)=>
    <option key={item}>{item}</option>
  )

  function addTask(event){
    event.preventDefault();
    onTaskFormSubmit({text, category});
    setCategory('Code');
    setText('')
  }
  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text"  value={text} onChange={(event)=> setText(event.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" onChange={event=>setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categoryList}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
